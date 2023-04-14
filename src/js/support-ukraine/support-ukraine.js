import { foundationItems } from './support-ukraine-arr';
import { refs } from '../refs';

function makeFoundationList({ img1x, img2x, title, url }, index) {
  return `<li class="support__ukraine-item">
   <div class="support__ukraine-number">${index}</div>
   <a
     class="support__ukraine-link"
     href="${url}"
     target="_blank"
     rel="noopener noreferrer"
   >
     <picture class="support__ukraine-img">
       <source
          srcset="
              ${img1x} 1x,
              ${img2x} 2x
            "
         type="image/png"
       />

       <img
         src="${img1x}"
         alt="${title}"
         height="32"
         loading="lazy"
       />
     </picture>
   </a>
 </li>`;
}

const markup = foundationItems
  .map((el, index) => {
    let number = (index + 1).toString().padStart(2, '0');
    return makeFoundationList(el, number);
  })
  .join('');

refs.foundationList.innerHTML += markup;

// размента под ретину =============================

//  <li class="support__ukraine-item">
//    <div class="support__ukraine-number">01</div>
//    <a
//      class="support__ukraine-link"
//      href="https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"
//      target="_blank"
//      rel="noopener noreferrer"
//    >
//      <picture class="support__ukraine-img">
//        <source
//          media="(min-width: 320px)"
//          srcset="
//               ./images/support-ukraine/image_3@1x.png 1x,
//               ./images/support-ukraine/image_3@2x.png 2x
//             "
//          type="image/png"
//        />

//        <img
//          src=" ./images/support-ukraine/image_3@1x.png"
//          alt="Ольга Рєпіна"
//          height="32"
//          loading="lazy"
//        />
//      </picture>
//    </a>
//  </li>;

// разметка без ретины ============================
//  `<li class="support__ukraine-item">
//       <div class="support__ukraine-number">${index}</div>
//       <a
//         class="support__ukraine-link"
//         href="${url}"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img
//           class="support__ukraine-img"
//           src="${img}"
//           alt="${title}"
//           height="32"
//           loading="lazy"
//         />
//       </a>
//     </li>`;
