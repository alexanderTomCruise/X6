import { Graph } from '@antv/x6'

const graph = new Graph({
  container: document.getElementById('container'),
  grid: true,
})

const node = graph.addNode({
  x: 100,
  y: 60,
  width: 400,
  height: 200,
  shape: 'ellipse',
  attrs: {
    body: {
      fill: '#f5f5f5',
      stroke: '#d9d9d9',
      strokeWidth: 1,
    },
    label: {
      text: 'radial',
      fill: '#888',
      fontSize: 12,
    },
  },
  ports: {
    groups: {
      a: {
        position: {
          name: 'ellipseSpread',
          args: {
            compensateRotate: true,
          },
        },
        label: {
          position: {
            name: 'radial',
          },
        },
        attrs: {
          circle: {
            fill: '#ffffff',
            stroke: '#31d0c6',
            strokeWidth: 2,
            r: 10,
            magnet: true,
          },
          text: {
            fill: '#6a6c8a',
            fontSize: 12,
          },
        },
      },
    },
  },
})

Array.from({ length: 10 }).forEach((_, index) => {
  node.addPort({ attrs: { text: { text: `P ${index}` } }, group: 'a' })
})

const prop = 'ports/groups/a/label/position'
function toggle() {
  const position = node.prop(prop) === 'radial' ? 'radialOriented' : 'radial'
  node.prop(prop, position)
  node.attr('label/text', position)

  setTimeout(toggle, 1000)
}

toggle()

graph.translate(70, 0)
