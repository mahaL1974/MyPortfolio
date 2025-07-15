import React, { useRef, useEffect } from "react";
import * as THREE from "three";
const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const pipeRef = useRef<THREE.Group>();
  const particlesRef = useRef<THREE.Points>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Create flowing pipe
    const pipeGroup = new THREE.Group();
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-10, -5, 0),
      new THREE.Vector3(-5, 0, 2),
      new THREE.Vector3(0, 3, -1),
      new THREE.Vector3(5, 1, 3),
      new THREE.Vector3(10, -2, 0),
      new THREE.Vector3(15, 2, -2),
    ]);

    const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.1, 8, false);
    const pipeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.6,
    });

    const pipe = new THREE.Mesh(tubeGeometry, pipeMaterial);
    pipeGroup.add(pipe);

    // Add glow effect
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.2,
    });
    const glowGeometry = new THREE.TubeGeometry(curve, 100, 0.3, 8, false);
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    pipeGroup.add(glow);

    scene.add(pipeGroup);
    pipeRef.current = pipeGroup;

    // Create minimal ambient particles
    const particleCount = 50;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 50;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4fc3f7,
      size: 0.05,
      transparent: true,
      opacity: 0.4,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Position camera
    camera.position.z = 20;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate pipe slowly
      if (pipeRef.current) {
        pipeRef.current.rotation.z += 0.001;
        pipeRef.current.rotation.y += 0.002;
      }

      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle scroll
    const handleScroll = () => {
      const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

      if (pipeRef.current) {
        pipeRef.current.scale.x = 0.8 + scrollProgress * 0.4;
        pipeRef.current.position.y = scrollProgress * 3;
      }

      if (cameraRef.current) {
        cameraRef.current.position.z = 20 - scrollProgress * 2;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Handle resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
};

export default ThreeBackground;
