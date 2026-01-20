// Utility to generate AI-themed icon textures on the fly using HTML Canvas
// This avoids external asset dependencies and ensures crisp vector-like quality.

export const createIconTexture = (type: string, color: string = '#000000'): string => {
  const canvas = document.createElement('canvas');
  const size = 512;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background
  ctx.fillStyle = '#ffffff00'; // Transparent
  ctx.clearRect(0, 0, size, size);

  // Draw settings
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 12;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  const cx = size / 2;
  const cy = size / 2;

  switch (type) {
    // Neural Network - 3 layers of nodes with connections (AI theme)
    case 'wifi':
    case 'neural-network': {
      const nodeRadius = 20;
      const layers = [
        [{ x: cx - 100, y: cy - 80 }, { x: cx - 100, y: cy }, { x: cx - 100, y: cy + 80 }],
        [{ x: cx, y: cy - 60 }, { x: cx, y: cy + 60 }],
        [{ x: cx + 100, y: cy - 40 }, { x: cx + 100, y: cy + 40 }]
      ];

      // Draw connections first (behind nodes)
      ctx.lineWidth = 6;
      ctx.globalAlpha = 0.6;
      for (let i = 0; i < layers.length - 1; i++) {
        for (const node1 of layers[i]) {
          for (const node2 of layers[i + 1]) {
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Draw nodes
      for (const layer of layers) {
        for (const node of layer) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      break;
    }

    // Code Brackets </> - Full-stack engineering theme
    case 'link':
    case 'code-brackets': {
      ctx.lineWidth = 20;

      // Left bracket <
      ctx.beginPath();
      ctx.moveTo(cx - 30, cy - 80);
      ctx.lineTo(cx - 100, cy);
      ctx.lineTo(cx - 30, cy + 80);
      ctx.stroke();

      // Right bracket >
      ctx.beginPath();
      ctx.moveTo(cx + 30, cy - 80);
      ctx.lineTo(cx + 100, cy);
      ctx.lineTo(cx + 30, cy + 80);
      ctx.stroke();

      // Slash /
      ctx.beginPath();
      ctx.moveTo(cx + 20, cy - 60);
      ctx.lineTo(cx - 20, cy + 60);
      ctx.stroke();
      break;
    }

    // Brain outline - AI intelligence theme
    case 'cloud':
    case 'brain': {
      ctx.lineWidth = 14;

      // Brain outline using bezier curves
      ctx.beginPath();
      // Left hemisphere
      ctx.moveTo(cx, cy - 90);
      ctx.bezierCurveTo(cx - 100, cy - 90, cx - 110, cy - 20, cx - 90, cy + 20);
      ctx.bezierCurveTo(cx - 110, cy + 50, cx - 80, cy + 100, cx, cy + 90);
      // Right hemisphere
      ctx.bezierCurveTo(cx + 80, cy + 100, cx + 110, cy + 50, cx + 90, cy + 20);
      ctx.bezierCurveTo(cx + 110, cy - 20, cx + 100, cy - 90, cx, cy - 90);
      ctx.stroke();

      // Brain folds (sulci)
      ctx.lineWidth = 8;
      ctx.globalAlpha = 0.7;

      // Left folds
      ctx.beginPath();
      ctx.moveTo(cx - 60, cy - 40);
      ctx.quadraticCurveTo(cx - 80, cy, cx - 50, cy + 30);
      ctx.stroke();

      // Right folds
      ctx.beginPath();
      ctx.moveTo(cx + 60, cy - 40);
      ctx.quadraticCurveTo(cx + 80, cy, cx + 50, cy + 30);
      ctx.stroke();

      // Center line
      ctx.beginPath();
      ctx.moveTo(cx, cy - 70);
      ctx.lineTo(cx, cy + 70);
      ctx.stroke();

      ctx.globalAlpha = 1;
      break;
    }

    // Data Flow arrows - data processing theme
    case 'shield':
    case 'data-flow': {
      ctx.lineWidth = 14;

      // Three parallel arrows flowing right
      const arrowY = [-60, 0, 60];

      for (const y of arrowY) {
        // Arrow line
        ctx.beginPath();
        ctx.moveTo(cx - 90, cy + y);
        ctx.lineTo(cx + 50, cy + y);
        ctx.stroke();

        // Arrow head
        ctx.beginPath();
        ctx.moveTo(cx + 50, cy + y);
        ctx.lineTo(cx + 80, cy + y);
        ctx.moveTo(cx + 60, cy + y - 25);
        ctx.lineTo(cx + 90, cy + y);
        ctx.lineTo(cx + 60, cy + y + 25);
        ctx.stroke();
      }
      break;
    }

    // Circuit board pattern - technical/engineering theme
    case 'dots':
    case 'circuit': {
      ctx.lineWidth = 8;

      // Central node
      ctx.beginPath();
      ctx.arc(cx, cy, 30, 0, Math.PI * 2);
      ctx.fill();

      // Corner nodes
      const corners = [
        { x: cx - 80, y: cy - 80 },
        { x: cx + 80, y: cy - 80 },
        { x: cx - 80, y: cy + 80 },
        { x: cx + 80, y: cy + 80 }
      ];

      for (const corner of corners) {
        // Small node
        ctx.beginPath();
        ctx.arc(corner.x, corner.y, 18, 0, Math.PI * 2);
        ctx.fill();

        // Connection line with right angles
        ctx.beginPath();
        ctx.moveTo(corner.x, corner.y);
        ctx.lineTo(corner.x, cy);
        ctx.lineTo(cx, cy);
        ctx.stroke();
      }

      // Side nodes
      ctx.beginPath();
      ctx.arc(cx, cy - 100, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx, cy - 100);
      ctx.lineTo(cx, cy);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy + 100, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx, cy + 100);
      ctx.lineTo(cx, cy);
      ctx.stroke();
      break;
    }

    // 3D Cube wireframe - spatial/architecture theme
    case 'lines':
    case 'cube-3d': {
      ctx.lineWidth = 10;
      const s = 70; // half size
      const offset = 40; // 3D offset

      // Front face
      ctx.beginPath();
      ctx.moveTo(cx - s, cy - s);
      ctx.lineTo(cx + s, cy - s);
      ctx.lineTo(cx + s, cy + s);
      ctx.lineTo(cx - s, cy + s);
      ctx.closePath();
      ctx.stroke();

      // Back face (offset)
      ctx.beginPath();
      ctx.moveTo(cx - s + offset, cy - s - offset);
      ctx.lineTo(cx + s + offset, cy - s - offset);
      ctx.lineTo(cx + s + offset, cy + s - offset);
      ctx.lineTo(cx - s + offset, cy + s - offset);
      ctx.closePath();
      ctx.stroke();

      // Connecting lines
      ctx.beginPath();
      ctx.moveTo(cx - s, cy - s);
      ctx.lineTo(cx - s + offset, cy - s - offset);
      ctx.moveTo(cx + s, cy - s);
      ctx.lineTo(cx + s + offset, cy - s - offset);
      ctx.moveTo(cx + s, cy + s);
      ctx.lineTo(cx + s + offset, cy + s - offset);
      ctx.moveTo(cx - s, cy + s);
      ctx.lineTo(cx - s + offset, cy + s - offset);
      ctx.stroke();
      break;
    }
  }

  return canvas.toDataURL();
};
