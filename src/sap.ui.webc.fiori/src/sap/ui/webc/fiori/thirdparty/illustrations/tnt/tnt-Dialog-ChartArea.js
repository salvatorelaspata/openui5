sap.ui.define(function () { 'use strict';

    var dialogSvg = `<svg width="160" height="160" viewBox="0 0 160 160" id="tnt-Dialog-ChartArea">
    <path fill="var(--sapIllus_PatternShadow)" d="M131,45.8608 C131,43.7288 129.271,41.9998 127.139,41.9998 L127.086,41.9998 L44.914,41.9998 L44.856,41.9998 C42.726,41.9998 41,43.7278 41,45.8578 L41.058,128.1418 C41.058,130.2728 42.785,131.9998 44.914,131.9998 L127.139,131.9998 C129.271,131.9998 131,130.2718 131,128.1388 L131,45.8608 Z" class="sapIllus_PatternShadow"/>
    <path fill="var(--sapIllus_ObjectFillColor)" d="M121.1418,125 L38.8578,125 C36.7278,125 34.9998,123.273 34.9998,121.142 L34.9998,38.858 C34.9998,36.727 36.7278,35 38.8578,35 L121.1418,35 C123.2728,35 124.9998,36.727 124.9998,38.858 L124.9998,121.142 C124.9998,123.273 123.2728,125 121.1418,125" class="sapIllus_ObjectFillColor"/>
    <path fill="var(--sapIllus_BrandColorSecondary)" d="M126,52 L36,52 L36,38.884 C36,36.739 37.739,35 39.884,35 L122.116,35 C124.261,35 126,36.739 126,38.884 L126,52 Z" class="sapIllus_BrandColorSecondary"/>
    <path fill="var(--sapIllus_StrokeDetailColor)" d="M36,52 L36,38.5 C36,37.122 37.122,36 38.5,36 L122.5,36 C123.878,36 125,37.122 125,38.5 L125,52 L36,52 Z M122.5,125 L38.5,125 C37.122,125 36,123.878 36,122.5 L36,52.002 L125,55.603 L125,122.5 C125,123.878 123.878,125 122.5,125 L122.5,125 Z M122.5,35 L38.5,35 C36.57,35 35,36.57 35,38.5 L35,122.5 C35,124.43 36.57,126 38.5,126 L122.5,126 C124.43,126 126,124.43 126,122.5 L126,38.5 C126,36.57 124.43,35 122.5,35 L122.5,35 Z" class="sapIllus_StrokeDetailColor"/>
    <path fill="var(--sapIllus_BackgroundColor)" d="M131 148.5C131 150.985 108.39 153 80.5 153 52.61 153 30 150.985 30 148.5 30 146.015 52.61 144 80.5 144 108.39 144 131 146.015 131 148.5M111.3637 81.6773L50.5147 81.6773 50.5147 68.0153C50.5147 67.3343 51.0677 66.7813 51.7487 66.7813L110.1297 66.7813C110.8117 66.7813 111.3637 67.3343 111.3637 68.0153L111.3637 81.6773z" class="sapIllus_BackgroundColor"/>
    <polygon fill="var(--sapIllus_Layering2)" points="50.515 96.573 111.364 96.573 111.364 81.677 50.515 81.677" class="sapIllus_Layering2"/>
    <path fill="var(--sapIllus_Layering1)" d="M110.1298,111.4021 L51.7488,111.4021 C51.0678,111.4021 50.5148,110.8501 50.5148,110.1681 L50.5148,96.5061 L111.3638,96.5061 L111.3638,110.1681 C111.3638,110.8501 110.8108,111.4021 110.1298,111.4021" class="sapIllus_Layering1"/>
    <path fill="var(--sapIllus_StrokeDetailColor)" d="M112.029,114.8994 L47.068,114.8534 L47.064,66.5094 C47.064,66.2334 46.841,66.0094 46.564,66.0094 C46.288,66.0094 46.064,66.2334 46.064,66.5094 L46.068,115.3564 C46.068,115.6324 46.292,115.8564 46.568,115.8564 C46.573,115.8564 46.577,115.8534 46.583,115.8534 L112.029,115.8994 C112.305,115.8994 112.529,115.6754 112.529,115.3994 C112.529,115.1244 112.305,114.8994 112.029,114.8994" class="sapIllus_StrokeDetailColor"/>
    <polygon fill="var(--sapIllus_ObjectFillColor)" points="43.566 110.486 42.11 107.077 76.691 94.45 100.771 95.305 121.006 84.006 123.229 87.749 101.848 99.687 77.384 98.818" class="sapIllus_ObjectFillColor"/>
    <path fill="var(--sapIllus_AccentColor)" d="M43.8661,107.7825 C43.5871,107.7825 43.3241,107.6175 43.2191,107.3495 C43.0831,107.0035 43.2631,106.6165 43.6211,106.4845 L76.3321,94.3585 L100.6111,95.3115 L119.7301,84.5765 C120.0611,84.3915 120.4841,84.5015 120.6751,84.8235 C120.8651,85.1435 120.7521,85.5535 120.4201,85.7385 L100.9571,96.6655 L76.5601,95.7085 L44.1111,107.7385 C44.0301,107.7685 43.9481,107.7825 43.8661,107.7825" class="sapIllus_AccentColor"/>
    <path fill="var(--sapIllus_ObjectFillColor)" d="M120.8636,76.4515 C121.1036,77.0315 121.0936,77.6715 120.8436,78.2415 C120.5936,78.8215 120.1236,79.2715 119.5136,79.5015 L98.6636,87.4715 L76.5436,90.6815 L45.3936,103.3615 C45.1036,103.4815 44.7936,103.5415 44.4736,103.5415 C43.5236,103.5415 42.6636,102.9915 42.2836,102.1415 C42.1136,101.7315 42.1036,101.2915 42.2736,100.8615 C42.7136,99.7615 44.1936,99.1115 44.3536,99.0415 L75.2436,86.1315 L75.3636,86.1215 L97.5436,82.9015 L117.7836,75.1415 C118.9936,74.6815 120.3736,75.2615 120.8636,76.4515 Z" class="sapIllus_ObjectFillColor"/>
    <path fill="var(--sapIllus_BrandColorSecondary)" d="M44.392,100.6908 C43.856,100.6908 43.346,100.3878 43.121,99.8808 C42.818,99.1998 43.142,98.4108 43.843,98.1178 L74.612,85.2558 L96.901,82.0278 L117.243,74.2268 C117.953,73.9538 118.757,74.2908 119.038,74.9798 C119.319,75.6688 118.971,76.4478 118.261,76.7208 L97.624,84.6348 L75.377,87.8568 L44.939,100.5808 C44.761,100.6558 44.575,100.6908 44.392,100.6908" class="sapIllus_BrandColorSecondary"/>
</svg>`;

    return dialogSvg;

});
