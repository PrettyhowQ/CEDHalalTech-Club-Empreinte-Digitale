import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Islamic3DSceneProps {
  className?: string;
  geometryType?: 'star' | 'dome' | 'pattern' | 'calligraphy';
  animated?: boolean;
}

export default function Islamic3DScene({ 
  className = '', 
  geometryType = 'star', 
  animated = true 
}: Islamic3DSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a); // Dark blue Islamic background
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    mountRef.current.appendChild(renderer.domElement);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x10b981, 1); // Islamic green
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Create Islamic geometry based on type
    let geometry: THREE.BufferGeometry;
    let material: THREE.Material;

    switch (geometryType) {
      case 'star':
        geometry = createIslamicStarGeometry();
        material = new THREE.MeshPhongMaterial({ 
          color: 0x10b981,
          shininess: 100,
          transparent: true,
          opacity: 0.8
        });
        break;
      
      case 'dome':
        geometry = new THREE.SphereGeometry(1, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        material = new THREE.MeshPhongMaterial({ 
          color: 0x059669,
          shininess: 100,
          wireframe: true
        });
        break;
      
      case 'pattern':
        geometry = createIslamicPatternGeometry();
        material = new THREE.MeshPhongMaterial({ 
          color: 0x10b981,
          transparent: true,
          opacity: 0.7
        });
        break;
      
      default:
        geometry = new THREE.OctahedronGeometry(1);
        material = new THREE.MeshPhongMaterial({ color: 0x10b981 });
    }

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);

    // Store refs
    sceneRef.current = scene;
    rendererRef.current = renderer;
    meshRef.current = mesh;

    // Animation loop
    const animate = () => {
      if (!animated) return;
      
      requestAnimationFrame(animate);
      
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
      
      renderer.render(scene, camera);
    };

    if (animated) {
      animate();
    } else {
      renderer.render(scene, camera);
    }

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      if (material instanceof THREE.Material) {
        material.dispose();
      }
      renderer.dispose();
    };
  }, [geometryType, animated]);

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: '300px' }}
    />
  );
}

// Helper function to create Islamic star geometry
function createIslamicStarGeometry(): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  const outerRadius = 1;
  const innerRadius = 0.5;
  const points = 8; // 8-pointed star (Khatam)

  for (let i = 0; i < points * 2; i++) {
    const angle = (i / (points * 2)) * Math.PI * 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  
  shape.closePath();
  
  const extrudeSettings = {
    depth: 0.2,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1
  };

  return new THREE.ExtrudeGeometry(shape, extrudeSettings);
}

// Helper function to create Islamic pattern geometry
function createIslamicPatternGeometry(): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const indices = [];
  
  // Create a simple geometric pattern
  const segments = 12;
  const radius = 1;
  
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = Math.sin(angle * 4) * 0.2; // Wave pattern
    
    vertices.push(x, y, z);
    
    if (i < segments) {
      indices.push(0, i, i + 1);
    }
  }
  
  geometry.setFromPoints(vertices.map((_, i) => 
    new THREE.Vector3(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2])
  ));
  
  return geometry;
}