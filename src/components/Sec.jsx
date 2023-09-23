// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// //import { stylesWithCssVar } from "@/utils/motion";

// const StreamlinedExperience = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end end"],
//   });
//   const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
//   const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
//   const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

//   const opacityBorder = useTransform(
//     scrollYProgress,
//     [0.7, 0.71, 0.72],
//     [1, 1, 0]
//   );
//   const finalTextOpacity = useTransform(
//     scrollYProgress,
//     [0.7, 0.71, 0.72, 0.8, 0.9],
//     [0, 0, 1, 1, 0]
//   );

//   const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

//   return (
//     <motion.section
//     // style={stylesWithCssVar({
//     //     opacity: opacitySection,
//     //     "--scale": scale,
//     //     "--opacity-border": opacityBorder,
//     //   })}
//     //   ref={targetRef}
//     //   className="mt-[50vh] flex h-[500vh] items-start justify-start"
//     >
//       <div className="sticky top-1/2 left-1/2 min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#CEF144] before:opacity-[var(--opacity-border)]">
//         <motion.p
//           aria-hidden
//           style={{ x: textX, y: "-50%" }}
//           className="white-space-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[23rem] text-heading"
//         >
//           Streamlined Experience.
//         </motion.p>
//         <motion.p
//           aria-hidden
//           style={{ x: textX, y: "-50%" }}
//           className="white-space-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[11] text-[23rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
//         >
//           Streamlined Experience.
//         </motion.p>

//         <motion.p
//           style={{
//             opacity: finalTextOpacity,
//             scale: finalTextScale,
//             y: "-50%",
//             x: "-50%",
//           }}
//           className="absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-white"
//         >
//           Streamlined
//           <br />
//           Experience.
//         </motion.p>
//         <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
//         <span className="absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[#CEF144] opacity-[var(--opacity-border)]" />
//       </div>
//     </motion.section>
//   );
// };

// export default StreamlinedExperience;



import React from 'react'
import "./Sec.css"

const Sec = () => {
  return (
//     <div className='body'>
//     <h1 className="top">Services</h1>
//     <div className="section">
    
//     <div className="card">
//       <h2>Paraphrasing Tool</h2>
//       <p>Quickly paraphrase text with ease.</p>
//       <a href="/paraphrase">Try Now</a>
//     </div>
//     <div className="card">
//       <h2>Summarizer</h2>
//       <p>Summarize lengthy content in seconds.</p>
//       <a href="/summary">Try Now</a>
//     </div>
//     <div className="card">
//       <h2>QR Code Generator</h2>
//       <p>Create QR codes for your links or data.</p>
//       <a href="/qrgen">Try Now</a>
//     </div>
//   </div>
//   </div>
<div className="py-10">
  <div className="container">
    <h4 className="fs-1 fw-bold mb-3 text-center text-white pt-50">Explore our features</h4>
    
    <div className="row gx-10 gy-7 mt-4">
      {/* Feature*/}
      <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-start">
        <span className="f-w-8 d-block text-primary">
          <svg
            className="w-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline opacity=".4" points="2 12 12 17 22 12" />
          </svg>
        </span>
        <p className="fw-medium mb-1 mt-3 fs-5">Paraphraser</p>
        <span className="text-muted fs-7">
         Parapharse your texts with ease.
        </span>
      </div>
      {/* / Feature*/}
      {/* Feature*/}
      <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-start">
        <span className="f-w-8 d-block text-primary">
          <svg
            className="w-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
            <rect opacity=".3" x={9} y={9} width={6} height={6} />
            <line x1={9} y1={1} x2={9} y2={4} />
            <line x1={15} y1={1} x2={15} y2={4} />
            <line x1={9} y1={20} x2={9} y2={23} />
            <line x1={15} y1={20} x2={15} y2={23} />
            <line x1={20} y1={9} x2={23} y2={9} />
            <line x1={20} y1={14} x2={23} y2={14} />
            <line x1={1} y1={9} x2={4} y2={9} />
            <line x1={1} y1={14} x2={4} y2={14} />
          </svg>
        </span>
        <p className="fw-medium mb-1 mt-3 fs-5">Summarizer Bot</p>
        <span className="text-muted fs-7">
          Summarize your texts seamlessly.
        </span>
      </div>
      {/* / Feature*/}
      {/* Feature*/}
      <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-start">
        <span className="f-w-8 d-block text-primary">
          <svg
            className="w-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx={18} cy={18} r={3} />
            <circle cx={6} cy={6} r={3} />
            <path opacity=".4" d="M13 6h3a2 2 0 0 1 2 2v7" />
            <line opacity=".4" x1={6} y1={9} x2={6} y2={21} />
          </svg>
        </span>
        <p className="fw-medium mb-1 mt-3 fs-5">QR Generator</p>
        <span className="text-muted fs-7">
         Generate QR CODE for any websites with one click.
        </span>
      </div>
      {/* / Feature*/}
      {/* Feature*/}

      {/* / Feature*/}
      {/* Feature*/}
   
      {/* / Feature*/}
      {/* Feature*/}
   
      {/* / Feature*/}
    </div>
    <a
      href="#"
      className="btn btn-primary d-table mx-auto mt-5 w-100 w-md-auto mt-lg-8 mb-3"
      role="button"
    >
      Start your trial
    </a>
    <ul className="list-unstyled d-none d-md-flex align-items-center justify-content-center small text-muted mt-3 pt-1 fw-medium fs-9">
      <li className="me-4 d-flex align-items-center">
        <i className="ri-checkbox-circle-fill text-primary ri-lg me-1" /> No
        credit card required
      </li>
      <li className="me-4 d-flex align-items-center">
        <i className="ri-checkbox-circle-fill text-primary ri-lg me-1" /> Cancel
        anytime
      </li>
      <li className="me-4 d-flex align-items-center">
        <i className="ri-checkbox-circle-fill text-primary ri-lg me-1" /> 30 day
        free trial
      </li>
    </ul>
  </div>
</div>


  )
}

export default Sec