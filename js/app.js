particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 350,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#ff0000", "#00bfff"]
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0.4,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.15
    },
    "size": {
      "value": 2.5,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffff",
      "opacity": 0.20,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["grab","repulse",]
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 3
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 150
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
particlesJS("particles-background", {
  particles: {
    number: {
      value: 350,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#ff0000", "#00bfff"]
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0.4,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.15
    },
    size: {
      value: 2.5,
      random: true
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: ["grab", "repulse"]
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 3
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 150
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
