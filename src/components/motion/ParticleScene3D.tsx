import { useEffect, useRef } from "react";
import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineSegments,
  EdgesGeometry,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from "three";

interface ParticleScene3DProps {
  className?: string;
  /** Element whose scroll position drives the camera depth (the hero section). */
  scrollTarget: React.RefObject<HTMLElement>;
}

/**
 * 3D particle scene for the hero (desktop only — Hero decides when to mount it).
 * A drifting particle sphere + faint wireframe core that follows the cursor and
 * "dollies" back as the hero scrolls out, for a cinematic depth feel.
 *
 * Cost control: loaded lazily (own chunk), 600 particles, 1x pixel ratio, no MSAA, ~30fps cap, renders only
 * while the hero is on screen and the tab is visible, fully disposed on unmount.
 */
const ParticleScene3D = ({ className, scrollTarget }: ParticleScene3DProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false });
    } catch {
      return; // WebGL unavailable — hero keeps the plain background.
    }
    renderer.setPixelRatio(1);

    const scene = new Scene();
    scene.add(new AmbientLight(0xffffff, 1));
    const camera = new PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 7;

    const group = new Group();
    scene.add(group);

    // Soft round sprite so points are circles, not squares.
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = spriteCanvas.height = 64;
    const sctx = spriteCanvas.getContext("2d")!;
    const grad = sctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(0,0,0,1)");
    grad.addColorStop(0.55, "rgba(0,0,0,0.9)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, 64, 64);
    const sprite = new CanvasTexture(spriteCanvas);

    // Particles on a sphere shell with some depth jitter.
    const COUNT = 600;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 2.2 + (Math.random() - 0.5) * 0.9;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pointsGeo = new BufferGeometry();
    pointsGeo.setAttribute("position", new BufferAttribute(positions, 3));
    const pointsMat = new PointsMaterial({
      size: 0.07,
      map: sprite,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const points = new Points(pointsGeo, pointsMat);
    group.add(points);

    // Faint wireframe core gives the sphere structure.
    const coreGeo = new EdgesGeometry(new IcosahedronGeometry(1.5, 1));
    const coreMat = new LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.12 });
    const core = new LineSegments(coreGeo, coreMat);
    group.add(core);

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Sit the sphere on the right half, clear of the text panel.
      camera.setViewOffset(w, h, -w * 0.2, 0, w, h);
      camera.updateProjectionMatrix();
    };

    let frame = 0;
    let visible = true;
    let tabVisible = !document.hidden;
    const clock = { last: performance.now() };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (!visible || !tabVisible) return;
      if (now - clock.last < 33) return; // ~30fps cap — plenty for slow drift, halves GPU/CPU use
      const dt = Math.min((now - clock.last) / 1000, 0.05);
      clock.last = now;

      // Ease toward the cursor.
      target.x += (mouse.x - target.x) * 0.05;
      target.y += (mouse.y - target.y) * 0.05;

      // Scroll depth: 0 at top of hero → 1 when hero has scrolled out.
      const el = scrollTarget.current;
      const progress = el
        ? Math.min(Math.max(window.scrollY / (el.offsetHeight || 1), 0), 1)
        : 0;

      group.rotation.y += dt * 0.12;
      group.rotation.x = target.y * 0.35 + progress * 0.6;
      group.rotation.z = -target.x * 0.15;
      group.position.x = target.x * 0.25;
      group.position.y = -target.y * 0.2;
      camera.position.z = 7 + progress * 5; // dolly back
      pointsMat.opacity = 0.7 * (1 - progress * 0.8);

      renderer.render(scene, camera);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) clock.last = performance.now();
    });
    io.observe(canvas);

    const onVisibility = () => {
      tabVisible = !document.hidden;
      clock.last = performance.now();
    };

    resize();
    frame = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
      pointsGeo.dispose();
      pointsMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      sprite.dispose();
      renderer.dispose();
    };
  }, [scrollTarget]);

  return <canvas ref={canvasRef} className={className} />;
};

export default ParticleScene3D;
