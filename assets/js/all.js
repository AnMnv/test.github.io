// ------- Osmo [https://osmo.supply/] ------- //

document.addEventListener("DOMContentLoaded", () => {
	// Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);
  // Parallax Layers
  document.querySelectorAll('[data-parallax-layers]').forEach((triggerElement) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0
      }
    });
    const layers = [
      { layer: "1", yPercent: 90 },
      { layer: "2", yPercent: 80 },
      { layer: "3", yPercent: 70 },
      { layer: "4", yPercent: 60 },
      { layer: "5", yPercent: 50 },
      { layer: "6", yPercent: 40 },
      { layer: "7", yPercent: 30 },
      { layer: "8", yPercent: 20 },
      { layer: "9", yPercent: 10 }
    ];
    layers.forEach((layerObj, idx) => {
      tl.to(
        triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
        {
          yPercent: layerObj.yPercent,
          ease: "none"
        },
        idx === 0 ? undefined : "<"
      );
    });
  });
});
/* Lenis */
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {lenis.raf(time * 1000);});
gsap.ticker.lagSmoothing(0);




document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "assets/imgs/Section_1/background.f8e0a3e86fb4252623af.png",
    "assets/imgs/Section_1/background.png",
    "assets/imgs/Section_1/mountains.png",
    "assets/imgs/Section_1/logo_land.png",
    "assets/imgs/Section_1/jungle1.png",
    "assets/imgs/Section_1/jungle2.png",
    "assets/imgs/Section_1/jungle3.png",
    "assets/imgs/Section_1/jungle4.png",

    
    "assets/imgs/Section_8/background.f8e0a3e86fb4252623af.png",
    "assets/imgs/Section_8/background.png",
    "assets/imgs/Section_8/mountains.png",
    "assets/imgs/Section_8/logo_land.png",
    "assets/imgs/Section_8/jungle1.png",
    "assets/imgs/Section_8/jungle2.png",
    "assets/imgs/Section_8/jungle3.png",
    "assets/imgs/Section_8/jungle4.png",

    "assets/imgs/Section_11/background.f8e0a3e86fb4252623af.png",
    "assets/imgs/Section_11/background.png",
    "assets/imgs/Section_11/mountains.png",
    "assets/imgs/Section_11/logo_land.png",
    "assets/imgs/Section_11/jungle1.png",
    "assets/imgs/Section_11/jungle2.png",
    "assets/imgs/Section_11/jungle3.png",
    "assets/imgs/Section_11/jungle4.png",

    "assets/imgs/Section_6/1.png",
    "assets/imgs/Section_6/2.png",
    "assets/imgs/Section_6/3.png",
    "assets/imgs/Section_6/4.png",
  ];

  images.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});

 
// Repo Cards 
window.addEventListener('DOMContentLoaded', async function() {
  async function get(url) {
    const resp = await fetch(url);
    return resp.json();
  }



  const emojis = await get('https://api.github.com/emojis');
  const colors = await get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json');

  document.querySelectorAll('.repo-card').forEach(async function(el) {
    const name = el.getAttribute('data-repo');

    const data = await get(`https://api.github.com/repos/${name}`);

    data.description = (data.description || '').replace(/:\w+:/g, function(match) {
      const name = match.substring(1, match.length - 1);
      const emoji = emojis[name];

      if (emoji) {
        return `<span><img src="${emoji}" style="width: 1rem; height: 1rem; vertical-align: -0.2rem;"></span>`;
      }

      return match;
    });

    el.innerHTML = `
    <div style="font-family: Segoe UI Emoji; font-weight: 600; padding: 16px; font-size: 18px; line-height: 1.5; color: #24292e;">
      <div style="display: flex; align-items: center;">
        <svg style="fill:rgb(77, 92, 106); margin-right: 8px;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
        <span style="font-weight: 600; color: #0366d6;">
          <a style="text-decoration: none; color: inherit;" href="${data.html_url}">${data.name}</a>
        </span>
      </div>
      <div style="display: ${data.fork ? 'block' : 'none'}; font-size: 16px; color: #586069;">Forked from <a style="color: inherit; text-decoration: none;" href="${data.fork ? data.source.html_url : ''}">${data.fork ? data.source.full_name : ''}</a></div>
      <div style="font-size: 16px; margin-bottom: 16px; margin-top: 8px; color:rgb(49, 121, 60);">${data.description}</div>
      <div style="font-size: 16px; color:rgb(105, 99, 88); display: flex;">
        <div style="${data.language ? '' : 'display: none'}; margin-right: 16px;">
          <span style="width: 12px; height: 12px; border-radius: 100%; background-color: ${data.language ? colors[data.language].color : ''}; display: inline-block; top: 1px; position: relative;"></span>
          <span>${data.language}</span>
        </div>
        <div style="display: ${data.stargazers_count == 0 ? 'none' : 'flex'}; align-items: center; margin-right: 16px;">
          <svg style="fill:rgb(170, 152, 59);" aria-label="stars" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
          &nbsp; <span>${data.stargazers_count}</span>
        </div>
        <div style="display: ${data.forks == 0 ? 'none' : 'flex'}; align-items: center;">
          <svg style="fill: #586069;" aria-label="fork" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
          &nbsp; <span>${data.forks}</span>
        </div>
      </div>
    </div>
    `;
  });
});
 