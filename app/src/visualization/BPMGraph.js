import React from 'react';

const BPMGraph = (props) => {
  return (
    <div>
        <svg className="BPMGraph" viewBox="0 0 745 204.9" preserveAspectRatio='none'>
        <path className="mainBox" d="M709.2,149.8H41.8C34.7,149.8,29,144,29,137V53.5c0-7.1,5.7-12.8,12.8-12.8h667.4c7.1,0,12.8,5.7,12.8,12.8V137C722,144,716.3,149.8,709.2,149.8z"/>
        <g>
        		<rect x="138" y="50.9" transform="matrix(1 -1.013721e-03 1.013721e-03 1 -9.716987e-02 0.1845)" className="belowAve" width="88" height="90"/>

        		<rect x="234" y="50.8" transform="matrix(1 -1.013721e-03 1.013721e-03 1 -9.702189e-02 0.2819)" className="average" width="88" height="90"/>

        		<rect x="330" y="50.8" transform="matrix(1 -1.013721e-03 1.013721e-03 1 -9.687391e-02 0.3792)" className="aboveAve" width="88" height="90"/>

        		<rect x="426" y="50.7" transform="matrix(1 -1.013721e-03 1.013721e-03 1 -9.672593e-02 0.4765)" className="good" width="88" height="90"/>

        		<rect x="522" y="50.6" transform="matrix(1 -1.013721e-03 1.013721e-03 1 -9.657795e-02 0.5738)" className="excellent" width="88" height="90"/>
        	<path className="poor" d="M45.1,51.3c-3.8,0-7,3.2-7,7l0.1,76.1c0,3.8,3.2,7,7,7l84.9-0.1L130,51.2L45.1,51.3z"/>
        	<path className="athlete" d="M703,50.6l-84.9,0.1l0.1,90.1l84.9-0.1c3.8,0,7-3.2,7-7L710,57.6C710,53.8,706.8,50.6,703,50.6z"/>
        </g>
        <g>
        	<path className="athlete" d="M637.7,165.1l-1.4,4.2h-1.8l4.6-13.4h2.1l4.6,13.4h-1.9l-1.4-4.2H637.7z M642.1,163.8l-1.3-3.9c-0.3-0.9-0.5-1.7-0.7-2.4h0c-0.2,0.8-0.4,1.6-0.7,2.4l-1.3,3.9H642.1z"/>
        	<path className="athlete" d="M649.5,156.9v2.8h2.5v1.3h-2.5v5.2c0,1.2,0.3,1.9,1.3,1.9c0.5,0,0.8-0.1,1-0.1l0.1,1.3c-0.3,0.1-0.9,0.2-1.6,0.2c-0.8,0-1.5-0.3-1.9-0.7c-0.5-0.5-0.7-1.4-0.7-2.5V161h-1.5v-1.3h1.5v-2.3L649.5,156.9z"/>
        	<path className="athlete" d="M654,155.2h1.8v6h0c0.3-0.5,0.7-0.9,1.3-1.2c0.5-0.3,1.1-0.5,1.8-0.5c1.3,0,3.4,0.8,3.4,4.1v5.7h-1.8v-5.5c0-1.6-0.6-2.9-2.2-2.9c-1.1,0-2,0.8-2.3,1.8c-0.1,0.2-0.1,0.5-0.1,0.8v5.8H654V155.2z"/>
        	<path className="athlete" d="M665.1,155.2h1.8v14.1h-1.8V155.2z"/>
        	<path className="athlete" d="M670.7,164.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H670.7z M675.9,163.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H675.9z"/>
        	<path className="athlete" d="M681.8,156.9v2.8h2.5v1.3h-2.5v5.2c0,1.2,0.3,1.9,1.3,1.9c0.5,0,0.8-0.1,1-0.1l0.1,1.3c-0.3,0.1-0.9,0.2-1.6,0.2c-0.8,0-1.5-0.3-1.9-0.7c-0.5-0.5-0.7-1.4-0.7-2.5V161h-1.5v-1.3h1.5v-2.3L681.8,156.9z"/>
        	<path className="athlete" d="M687.2,164.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H687.2z M692.3,163.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H692.3z"/>
        </g>
        <g>
        	<path className="excellent" d="M538.5,163h-5.2v4.8h5.8v1.5h-7.5v-13.4h7.2v1.5h-5.5v4.2h5.2V163z"/>
        	<path className="excellent" d="M542.1,159.7l1.4,2.1c0.4,0.5,0.7,1,1,1.6h0.1c0.3-0.6,0.6-1.1,1-1.6l1.4-2h1.9l-3.3,4.7l3.4,5h-2l-1.4-2.2c-0.4-0.6-0.7-1.1-1-1.7h0c-0.3,0.6-0.7,1.1-1,1.7l-1.4,2.2h-1.9l3.4-4.9l-3.3-4.7H542.1z"/>
        	<path className="excellent" d="M557,169c-0.5,0.2-1.5,0.6-2.8,0.6c-2.9,0-4.8-2-4.8-4.9c0-3,2-5.1,5.2-5.1c1,0,2,0.3,2.4,0.5l-0.4,1.4c-0.4-0.2-1.1-0.5-2-0.5c-2.2,0-3.4,1.6-3.4,3.6c0,2.2,1.4,3.6,3.3,3.6c1,0,1.7-0.3,2.1-0.5L557,169z"/>
        	<path className="excellent" d="M559.9,164.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H559.9z M565.1,163.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H565.1z"/>
        	<path className="excellent" d="M568.9,155.2h1.8v14.1h-1.8V155.2z"/>
        	<path className="excellent" d="M573.6,155.2h1.8v14.1h-1.8V155.2z"/>
        	<path className="excellent" d="M579.3,164.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H579.3z M584.4,163.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H584.4z"/>
        	<path className="excellent" d="M588.3,162.3c0-1,0-1.8-0.1-2.6h1.6l0.1,1.6h0c0.5-0.9,1.6-1.8,3.2-1.8c1.3,0,3.4,0.8,3.4,4.1v5.8h-1.8v-5.6c0-1.6-0.6-2.8-2.2-2.8c-1.2,0-2,0.8-2.3,1.8c-0.1,0.2-0.1,0.5-0.1,0.8v5.8h-1.8V162.3z"/>
        	<path className="excellent" d="M601.3,156.9v2.8h2.5v1.3h-2.5v5.2c0,1.2,0.3,1.9,1.3,1.9c0.5,0,0.8-0.1,1-0.1l0.1,1.3c-0.3,0.1-0.9,0.2-1.6,0.2c-0.8,0-1.5-0.3-1.9-0.7c-0.5-0.5-0.7-1.4-0.7-2.5V161h-1.5v-1.3h1.5v-2.3L601.3,156.9z"/>
        </g>
        <g>
        	<path className="good" d="M461.7,168.7c-0.8,0.3-2.3,0.7-4.1,0.7c-2,0-3.7-0.5-5-1.8c-1.2-1.1-1.9-2.9-1.9-5c0-4,2.8-6.9,7.3-6.9c1.6,0,2.8,0.3,3.3,0.6l-0.4,1.4c-0.7-0.3-1.6-0.6-3-0.6c-3.3,0-5.4,2-5.4,5.4c0,3.4,2,5.4,5.2,5.4c1.1,0,1.9-0.2,2.3-0.4v-4h-2.7v-1.4h4.4V168.7z"/>
        	<path className="good" d="M473.1,164.4c0,3.6-2.5,5.1-4.8,5.1c-2.6,0-4.6-1.9-4.6-5c0-3.2,2.1-5.1,4.8-5.1C471.2,159.5,473.1,161.5,473.1,164.4z M465.5,164.5c0,2.1,1.2,3.7,2.9,3.7c1.7,0,2.9-1.6,2.9-3.7c0-1.6-0.8-3.7-2.9-3.7C466.4,160.8,465.5,162.7,465.5,164.5z"/>
        	<path className="good" d="M484,164.4c0,3.6-2.5,5.1-4.8,5.1c-2.6,0-4.6-1.9-4.6-5c0-3.2,2.1-5.1,4.8-5.1C482.2,159.5,484,161.5,484,164.4z M476.4,164.5c0,2.1,1.2,3.7,2.9,3.7c1.7,0,2.9-1.6,2.9-3.7c0-1.6-0.8-3.7-2.9-3.7C477.3,160.8,476.4,162.7,476.4,164.5z"/>
        	<path className="good" d="M494.6,155.2v11.6c0,0.9,0,1.8,0.1,2.5h-1.6l-0.1-1.7h0c-0.5,1.1-1.7,1.9-3.3,1.9c-2.3,0-4.1-2-4.1-4.9c0-3.2,2-5.2,4.3-5.2c1.5,0,2.5,0.7,2.9,1.5h0v-5.8H494.6z M492.8,163.6c0-0.2,0-0.5-0.1-0.7c-0.3-1.1-1.2-2-2.5-2c-1.8,0-2.9,1.6-2.9,3.7c0,2,1,3.6,2.8,3.6c1.2,0,2.2-0.8,2.6-2.1c0.1-0.2,0.1-0.5,0.1-0.8V163.6z"/>
        </g>
        <g>
        	<path className="average" d="M249.7,164.6l-1.5,4.2l-1.8,0l4.8-13.3l2.1,0l4.4,13.5l-1.9,0l-1.4-4.2L249.7,164.6z M254.1,163.3l-1.2-3.9c-0.3-0.9-0.5-1.7-0.7-2.5h0c-0.2,0.8-0.4,1.6-0.7,2.4l-1.4,3.9L254.1,163.3z"/>
        	<path className="average" d="M259.9,159.4l1.8,5.4c0.3,0.9,0.5,1.7,0.7,2.5l0.1,0c0.2-0.8,0.5-1.6,0.9-2.5l2-5.4l1.8,0l-3.9,9.6l-1.7,0l-3.5-9.7L259.9,159.4z"/>
        	<path className="average" d="M269.5,164.7c0,2.4,1.5,3.4,3.2,3.4c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.5c-3,0-4.7-2-4.7-4.9s1.8-5.2,4.6-5.1c3.1,0.1,3.9,2.8,3.9,4.6c0,0.4-0.1,0.6-0.1,0.8L269.5,164.7z M274.7,163.5c0-1.1-0.4-2.9-2.4-2.9c-1.8,0-2.6,1.6-2.7,2.8L274.7,163.5z"/>
        	<path className="average" d="M278.6,162.7c0-1.1,0-2.1,0-3l1.5,0l0,1.9l0.1,0c0.5-1.3,1.5-2.1,2.7-2.1c0.2,0,0.3,0,0.5,0.1l0,1.7c-0.2,0-0.4-0.1-0.6-0.1c-1.2,0-2.1,0.9-2.4,2.2c0,0.2-0.1,0.5-0.1,0.8l-0.1,5.1l-1.7,0L278.6,162.7z"/>
        	<path className="average" d="M290.2,169.5l-0.1-1.2l-0.1,0c-0.5,0.7-1.6,1.4-3,1.4c-1.9,0-2.9-1.4-2.9-2.8c0-2.3,2.1-3.6,5.8-3.5l0-0.2c0-0.8-0.2-2.2-2.2-2.3c-0.9,0-1.8,0.2-2.5,0.7l-0.4-1.2c0.8-0.5,2-0.8,3.2-0.8c2.9,0,3.6,2.1,3.6,4l-0.1,3.6c0,0.8,0,1.7,0.1,2.3L290.2,169.5z M290,164.6c-1.9-0.1-4.1,0.2-4.1,2.1c0,1.1,0.7,1.7,1.6,1.7c1.3,0,2.1-0.8,2.4-1.6c0.1-0.2,0.1-0.4,0.1-0.6L290,164.6z"/>
        	<path className="average" d="M302.9,160.1c-0.1,0.7-0.1,1.5-0.1,2.6l-0.1,5.6c0,2.2-0.5,3.6-1.4,4.4c-0.9,0.9-2.3,1.1-3.5,1.1c-1.2,0-2.4-0.3-3.2-0.8l0.5-1.3c0.6,0.4,1.6,0.8,2.8,0.8c1.8,0,3.1-0.9,3.2-3.3l0-1.1h0c-0.6,0.9-1.6,1.6-3.1,1.6c-2.4,0-4.1-2.1-4-4.8c0.1-3.3,2.2-5.1,4.4-5c1.7,0,2.6,0.9,3,1.7h0l0.1-1.4L302.9,160.1z M301,163.8c0-0.3,0-0.6-0.1-0.8c-0.3-1-1.1-1.9-2.4-1.9c-1.7,0-2.9,1.4-2.9,3.6c0,1.9,0.9,3.5,2.8,3.5c1.1,0,2.1-0.6,2.5-1.8c0.1-0.3,0.1-0.6,0.2-0.9L301,163.8z"/>
        	<path className="average" d="M306.6,165.3c0,2.4,1.5,3.4,3.2,3.4c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.5c-3,0-4.7-2-4.7-4.9s1.8-5.2,4.6-5.1c3.1,0.1,3.9,2.8,3.9,4.6c0,0.4-0.1,0.6-0.1,0.8L306.6,165.3z M311.8,164.1c0-1.1-0.4-2.9-2.4-2.9c-1.8,0-2.6,1.6-2.7,2.8L311.8,164.1z"/>
        </g>
        <g>
        	<path className="poor" d="M64.6,155.6c0.8-0.1,1.9-0.2,3.3-0.2c1.7,0,3,0.4,3.7,1.2c0.7,0.6,1.1,1.6,1.1,2.8c0,1.2-0.4,2.2-1.1,2.8c-0.9,1-2.4,1.4-4.1,1.4c-0.5,0-1,0-1.4-0.1l-0.1,5.4l-1.7,0L64.6,155.6z M66.3,162.1c0.4,0.1,0.9,0.2,1.4,0.2c2.1,0,3.4-1,3.4-2.8c0-1.8-1.2-2.6-3.1-2.7c-0.8,0-1.3,0-1.6,0.1L66.3,162.1z"/>
        	<path className="poor" d="M83.2,164.2c-0.1,3.6-2.5,5.1-4.9,5c-2.6,0-4.6-2-4.5-5c0.1-3.2,2.2-5.1,4.9-5C81.4,159.2,83.3,161.3,83.2,164.2z M75.6,164.2c0,2.1,1.2,3.7,2.9,3.7c1.7,0,2.9-1.5,3-3.7c0-1.6-0.8-3.7-2.8-3.7C76.6,160.5,75.6,162.4,75.6,164.2z"/>
        	<path className="poor" d="M94.2,164.4c-0.1,3.6-2.5,5.1-4.9,5c-2.6,0-4.6-2-4.5-5c0.1-3.2,2.2-5.1,4.9-5C92.4,159.4,94.2,161.4,94.2,164.4z M86.5,164.4c0,2.1,1.2,3.7,2.9,3.7c1.7,0,2.9-1.5,3-3.7c0-1.6-0.8-3.7-2.8-3.7C87.5,160.6,86.5,162.5,86.5,164.4z"/>
        	<path className="poor" d="M96.4,162.7c0-1.1,0-2.1,0-3l1.5,0l0,1.9l0.1,0c0.5-1.3,1.5-2.1,2.7-2.1c0.2,0,0.3,0,0.5,0.1l0,1.7c-0.2,0-0.4-0.1-0.6-0.1c-1.2,0-2.1,0.9-2.4,2.2c0,0.2-0.1,0.5-0.1,0.8l-0.1,5.1l-1.7,0L96.4,162.7z"/>
        </g>
        <g>
        	<path className="aboveAve" d="M350.9,165.1l-1.4,4.2h-1.8l4.6-13.4h2.1l4.6,13.4h-1.9l-1.4-4.2H350.9z M355.3,163.8l-1.3-3.9c-0.3-0.9-0.5-1.7-0.7-2.4h0c-0.2,0.8-0.4,1.6-0.7,2.4l-1.3,3.9H355.3z"/>
        	<path className="aboveAve" d="M360.7,169.3c0-0.7,0.1-1.6,0.1-2.5v-11.6h1.7v6h0c0.6-1.1,1.7-1.8,3.3-1.8c2.4,0,4.1,2,4.1,4.9c0,3.4-2.2,5.2-4.3,5.2c-1.4,0-2.5-0.5-3.2-1.8h-0.1l-0.1,1.6H360.7z M362.5,165.5c0,0.2,0,0.4,0.1,0.6c0.3,1.2,1.4,2,2.6,2c1.8,0,2.9-1.5,2.9-3.7c0-1.9-1-3.6-2.9-3.6c-1.2,0-2.3,0.8-2.7,2.1c0,0.2-0.1,0.4-0.1,0.7V165.5z"/>
        	<path className="aboveAve" d="M380.8,164.4c0,3.6-2.5,5.1-4.8,5.1c-2.6,0-4.6-1.9-4.6-5c0-3.2,2.1-5.1,4.8-5.1C379,159.5,380.8,161.5,380.8,164.4z M373.2,164.5c0,2.1,1.2,3.7,2.9,3.7c1.7,0,2.9-1.6,2.9-3.7c0-1.6-0.8-3.7-2.9-3.7C374.1,160.8,373.2,162.7,373.2,164.5z"/>
        	<path className="aboveAve" d="M383.6,159.7l1.9,5.4c0.3,0.9,0.6,1.7,0.8,2.5h0.1c0.2-0.8,0.5-1.6,0.8-2.5l1.9-5.4h1.8l-3.8,9.6h-1.7l-3.7-9.6H383.6z"/>
        	<path className="aboveAve" d="M393.2,164.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H393.2z M398.4,163.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H398.4z"/>
        	<path className="aboveAve" d="M343.6,183.1l-1.4,4.2h-1.8l4.6-13.4h2.1l4.6,13.4h-1.9l-1.4-4.2H343.6z M348,181.8l-1.3-3.9c-0.3-0.9-0.5-1.7-0.7-2.4h0c-0.2,0.8-0.4,1.6-0.7,2.4l-1.3,3.9H348z"/>
        	<path className="aboveAve" d="M353.8,177.7l1.9,5.4c0.3,0.9,0.6,1.7,0.8,2.5h0.1c0.2-0.8,0.5-1.6,0.8-2.5l1.9-5.4h1.8l-3.8,9.6h-1.7l-3.7-9.6H353.8z"/>
        	<path className="aboveAve" d="M363.5,182.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H363.5z M368.6,181.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H368.6z"/>
        	<path className="aboveAve" d="M372.5,180.7c0-1.1,0-2.1-0.1-3h1.5l0.1,1.9h0.1c0.4-1.3,1.5-2.1,2.7-2.1c0.2,0,0.3,0,0.5,0.1v1.7c-0.2,0-0.4-0.1-0.6-0.1c-1.2,0-2.1,0.9-2.3,2.2c0,0.2-0.1,0.5-0.1,0.8v5.1h-1.7V180.7z"/>
        	<path className="aboveAve" d="M384.2,187.3l-0.1-1.2H384c-0.5,0.8-1.6,1.4-2.9,1.4c-2,0-2.9-1.4-2.9-2.8c0-2.3,2.1-3.6,5.8-3.6V181c0-0.8-0.2-2.2-2.2-2.2c-0.9,0-1.8,0.3-2.5,0.7l-0.4-1.2c0.8-0.5,2-0.9,3.2-0.9c2.9,0,3.7,2,3.7,3.9v3.6c0,0.8,0,1.7,0.2,2.3H384.2z M383.9,182.4c-1.9,0-4.1,0.3-4.1,2.2c0,1.1,0.8,1.7,1.7,1.7c1.3,0,2-0.8,2.3-1.6c0.1-0.2,0.1-0.4,0.1-0.6V182.4z"/>
        	<path className="aboveAve" d="M396.7,177.7c0,0.7-0.1,1.5-0.1,2.6v5.6c0,2.2-0.4,3.6-1.4,4.4c-0.9,0.9-2.3,1.2-3.5,1.2c-1.2,0-2.4-0.3-3.2-0.8l0.4-1.3c0.6,0.4,1.6,0.8,2.8,0.8c1.8,0,3.1-0.9,3.1-3.4v-1.1h0c-0.5,0.9-1.6,1.6-3.1,1.6c-2.4,0-4.1-2-4.1-4.7c0-3.3,2.1-5.1,4.3-5.1c1.7,0,2.6,0.9,3,1.7h0l0.1-1.5H396.7z M394.9,181.5c0-0.3,0-0.6-0.1-0.8c-0.3-1-1.2-1.9-2.4-1.9c-1.7,0-2.9,1.4-2.9,3.6c0,1.9,1,3.5,2.8,3.5c1.1,0,2-0.7,2.4-1.8c0.1-0.3,0.1-0.6,0.1-0.9V181.5z"/>
        	<path className="aboveAve" d="M400.5,182.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H400.5z M405.7,181.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H405.7z"/>
        </g>
        <g>
        	<path className="belowAve" d="M157,156.1c0.8-0.2,1.9-0.3,3.2-0.3c1.7,0,2.8,0.3,3.7,1c0.7,0.5,1.1,1.3,1.1,2.4c0,1.3-0.9,2.4-2.3,2.9v0c1.3,0.3,2.8,1.4,2.8,3.4c0,1.2-0.5,2-1.1,2.7c-0.9,0.9-2.4,1.3-4.6,1.3c-1.2,0-2.1-0.1-2.7-0.2V156.1z M158.8,161.6h1.6c1.8,0,2.9-1,2.9-2.2c0-1.6-1.2-2.2-2.9-2.2c-0.8,0-1.3,0.1-1.5,0.1V161.6z M158.8,168c0.3,0.1,0.8,0.1,1.5,0.1c1.8,0,3.4-0.7,3.4-2.6c0-1.8-1.6-2.6-3.5-2.6h-1.4V168z"/>
        	<path className="belowAve" d="M168.8,164.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H168.8z M174,163.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H174z"/>
        	<path className="belowAve" d="M177.8,155.2h1.8v14.1h-1.8V155.2z"/>
        	<path className="belowAve" d="M191.2,164.4c0,3.6-2.5,5.1-4.8,5.1c-2.6,0-4.6-1.9-4.6-5c0-3.2,2.1-5.1,4.8-5.1C189.3,159.5,191.2,161.5,191.2,164.4z M183.6,164.5c0,2.1,1.2,3.7,2.9,3.7c1.7,0,2.9-1.6,2.9-3.7c0-1.6-0.8-3.7-2.9-3.7S183.6,162.7,183.6,164.5z"/>
        	<path className="belowAve" d="M194,159.7l1.3,4.9c0.3,1.1,0.5,2.1,0.7,3.1h0.1c0.2-1,0.5-2,0.9-3l1.6-4.9h1.5l1.5,4.8c0.4,1.2,0.6,2.2,0.9,3.1h0.1c0.2-1,0.4-2,0.7-3.1l1.4-4.8h1.7l-3.1,9.6h-1.6l-1.5-4.6c-0.3-1.1-0.6-2-0.9-3.2h0c-0.2,1.2-0.5,2.1-0.9,3.2l-1.6,4.6h-1.6l-2.9-9.6H194z"/>
        	<path className="belowAve" d="M150.6,183.1l-1.4,4.2h-1.8l4.6-13.4h2.1l4.6,13.4h-1.9l-1.4-4.2H150.6z M155,181.8l-1.3-3.9c-0.3-0.9-0.5-1.7-0.7-2.4h0c-0.2,0.8-0.4,1.6-0.7,2.4l-1.3,3.9H155z"/>
        	<path className="belowAve" d="M160.8,177.7l1.9,5.4c0.3,0.9,0.6,1.7,0.8,2.5h0.1c0.2-0.8,0.5-1.6,0.8-2.5l1.9-5.4h1.8l-3.8,9.6h-1.7l-3.7-9.6H160.8z"/>
        	<path className="belowAve" d="M170.5,182.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H170.5z M175.6,181.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H175.6z"/>
        	<path className="belowAve" d="M179.5,180.7c0-1.1,0-2.1-0.1-3h1.5l0.1,1.9h0.1c0.4-1.3,1.5-2.1,2.7-2.1c0.2,0,0.3,0,0.5,0.1v1.7c-0.2,0-0.4-0.1-0.6-0.1c-1.2,0-2.1,0.9-2.3,2.2c0,0.2-0.1,0.5-0.1,0.8v5.1h-1.7V180.7z"/>
        	<path className="belowAve" d="M191.2,187.3l-0.1-1.2H191c-0.5,0.8-1.6,1.4-2.9,1.4c-1.9,0-2.9-1.4-2.9-2.8c0-2.3,2.1-3.6,5.8-3.6V181c0-0.8-0.2-2.2-2.2-2.2c-0.9,0-1.8,0.3-2.5,0.7l-0.4-1.2c0.8-0.5,2-0.9,3.2-0.9c2.9,0,3.7,2,3.7,3.9v3.6c0,0.8,0,1.7,0.2,2.3H191.2z M190.9,182.4c-1.9,0-4.1,0.3-4.1,2.2c0,1.1,0.8,1.7,1.7,1.7c1.3,0,2-0.8,2.3-1.6c0.1-0.2,0.1-0.4,0.1-0.6V182.4z"/>
        	<path className="belowAve" d="M203.7,177.7c0,0.7-0.1,1.5-0.1,2.6v5.6c0,2.2-0.4,3.6-1.4,4.4c-0.9,0.9-2.3,1.2-3.5,1.2c-1.2,0-2.4-0.3-3.2-0.8l0.4-1.3c0.6,0.4,1.6,0.8,2.8,0.8c1.8,0,3.1-0.9,3.1-3.4v-1.1h0c-0.5,0.9-1.6,1.6-3.1,1.6c-2.4,0-4.1-2-4.1-4.7c0-3.3,2.1-5.1,4.3-5.1c1.7,0,2.6,0.9,3,1.7h0l0.1-1.5H203.7z M201.9,181.5c0-0.3,0-0.6-0.1-0.8c-0.3-1-1.2-1.9-2.4-1.9c-1.7,0-2.9,1.4-2.9,3.6c0,1.9,1,3.5,2.8,3.5c1.1,0,2-0.7,2.4-1.8c0.1-0.3,0.1-0.6,0.1-0.9V181.5z"/>
        	<path className="belowAve" d="M207.5,182.8c0,2.4,1.6,3.3,3.3,3.3c1.3,0,2-0.2,2.7-0.5l0.3,1.3c-0.6,0.3-1.7,0.6-3.2,0.6c-3,0-4.7-2-4.7-4.9s1.7-5.2,4.5-5.2c3.1,0,4,2.8,4,4.5c0,0.4,0,0.6-0.1,0.8H207.5z M212.7,181.6c0-1.1-0.5-2.8-2.4-2.8c-1.8,0-2.5,1.6-2.7,2.8H212.7z"/>
        </g>
        <path className="pointer" d="M402.1,32.3c0-3.8-3.2-7-7-7l-46.1,0.1c-3.8,0-7,3.2-7,7l0.1,18.3l30,21l30.2-21.1L402.1,32.3z"/>
        </svg>
    </div>
  );
}

export default BPMGraph;
