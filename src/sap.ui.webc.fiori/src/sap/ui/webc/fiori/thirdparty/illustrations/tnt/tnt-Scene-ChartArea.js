sap.ui.define(function () { 'use strict';

    var sceneSvg = `<svg width="320" height="240" viewBox="0 0 320 240" id="tnt-Scene-ChartArea">
    <path fill="var(--sapIllus_BackgroundColor)" d="M247.3886,59.8645924 C269.5986,94.7765924 263.2466,147.733592 234.5336,174.388592 C205.9766,201.010592 154.9326,201.507592 115.7866,184.754592 C76.4536,167.889592 48.8916,133.952592 52.2816,98.7745924 C55.5156,63.6305924 89.8566,27.2145924 132.2726,17.5445924 C174.6886,7.87459236 225.3346,24.9195924 247.3886,59.8645924" class="sapIllus_BackgroundColor"/>
    <path fill="var(--sapIllus_Layering2)" d="M162.731 203.910392L162.698 203.910392C161.87 203.891392 161.212 203.206392 161.23 202.378392L162.471 144.658392C162.489 143.841392 163.157 143.190392 163.97 143.190392L164.003 143.190392C164.832 143.209392 165.489 143.894392 165.471 144.722392L164.23 202.442392C164.212 203.260392 163.544 203.910392 162.731 203.910392M105.2681 217.989592C105.1531 217.989592 105.0351 217.976592 104.9171 217.948592 104.1121 217.755592 103.6161 216.945592 103.8081 216.139592L118.5671 154.587592C118.7591 153.781592 119.5701 153.282592 120.3751 153.477592 121.1811 153.671592 121.6771 154.480592 121.4851 155.286592L106.7261 216.839592C106.5611 217.527592 105.9461 217.989592 105.2681 217.989592M203.5689 217.989592C202.8919 217.989592 202.2779 217.528592 202.1119 216.842592L187.6029 156.880592C187.4089 156.075592 187.9029 155.264592 188.7089 155.069592 189.5139 154.875592 190.3249 155.370592 190.5189 156.175592L205.0279 216.136592C205.2219 216.941592 204.7279 217.752592 203.9229 217.947592 203.8039 217.975592 203.6849 217.989592 203.5689 217.989592" class="sapIllus_Layering2"/>
    <path fill="var(--sapIllus_ObjectFillColor)" d="M232.9085,158.673692 L78.7895,152.888692 C77.1335,152.826692 75.8415,151.434692 75.9035,149.778692 L80.4935,27.4956924 C80.5555,25.8396924 81.9485,24.5476924 83.6035,24.6096924 L237.7235,30.3946924 C239.3795,30.4566924 240.6705,31.8496924 240.6085,33.5046924 L236.0185,155.788692 C235.9565,157.443692 234.5645,158.735692 232.9085,158.673692" class="sapIllus_ObjectFillColor"/>
    <polygon fill="var(--sapIllus_StrokeDetailColor)" points="80.156 43.378 80.006 42.424 240.111 42.098 239.435 52.76" class="sapIllus_StrokeDetailColor"/>
    <path fill="var(--sapIllus_BrandColorSecondary)" d="M239.7348,48.4045924 L80.2478,42.4185924 C80.0748,42.4115924 79.9388,42.2655924 79.9455414,42.0925924 L80.4938,27.4955924 C80.5558,25.8395924 81.9478,24.5475924 83.6038,24.6095924 L237.7238,30.3945924 C239.3788,30.4565924 240.6708,31.8495924 240.6088,33.5055924 L240.0608,48.1025924 C240.0548,48.2755924 239.9088,48.4115924 239.7348,48.4045924" class="sapIllus_BrandColorSecondary"/>
    <path fill="var(--sapIllus_StrokeDetailColor)" d="M232.9271,158.175497 C233.6031,158.195192 234.2311,157.962192 234.7211,157.508192 C235.2111,157.054192 235.4941,156.437192 235.5191,155.770192 L240.1091,33.4871924 C240.1601,32.1091924 239.0821,30.9461924 237.7051,30.8941924 L83.5851,25.1101924 C82.9121,25.0861924 82.2811,25.3211924 81.7911,25.7751924 C81.3021,26.2291924 81.0181,26.8471924 80.9931,27.5141924 L76.4031,149.797192 C76.3521,151.175192 77.4301,152.338192 78.8071,152.389192 L232.9271,158.175497 Z M233.0221,159.175192 C232.9781,159.175192 232.9341,159.175192 232.8901,159.173192 L78.7701,153.388192 C77.8361,153.354192 76.9711,152.957192 76.3361,152.271192 C75.7001,151.586192 75.3691,150.694192 75.4041,149.760192 L79.9941,27.4771924 C80.0291,26.5421924 80.4261,25.6771924 81.1111,25.0421924 C81.7961,24.4061924 82.6811,24.0741924 83.6231,24.1111924 L237.7421,29.8951924 C238.6771,29.9301924 239.5411,30.3271924 240.1771,31.0121924 C240.8121,31.6971924 241.1431,32.5901924 241.1081,33.5241924 L236.5181,155.807192 C236.4481,157.691192 234.8921,159.175192 233.0221,159.175192 L233.0221,159.175192 Z" class="sapIllus_StrokeDetailColor"/>
    <path fill="var(--sapIllus_BrandColorSecondary)" d="M266.6629 115.992392L253.3529 122.530392C252.6999 122.851392 252.6389 123.759392 253.2439 124.165392L265.5609 132.422392C266.1659 132.827392 266.9819 132.426392 267.0309 131.700392L268.0229 116.904392C268.0719 116.178392 267.3159 115.671392 266.6629 115.992392M121.992 12.7384924C121.032 14.7274924 118.641 15.5614924 116.652 14.6014924 114.663 13.6414924 113.829 11.2504924 114.789 9.26149236 115.749 7.27249236 118.14 6.43849236 120.129 7.39849236 122.118 8.35849236 122.952 10.7494924 121.992 12.7384924" class="sapIllus_BrandColorSecondary"/>
    <path fill="var(--sapIllus_BackgroundColor)" d="M218.3503,227.172892 C218.3503,230.486892 191.2633,233.172892 157.8503,233.172892 C124.4373,233.172892 97.3503,230.486892 97.3503,227.172892 C97.3503,223.858892 124.4373,221.172892 157.8503,221.172892 C191.2633,221.172892 218.3503,223.858892 218.3503,227.172892" class="sapIllus_BackgroundColor"/>
    <path fill="var(--sapIllus_ObjectFillColor)" d="M116.5305,35.8304924 C115.8885,37.1594924 114.2915,37.7164924 112.9625,37.0754924 C111.6335,36.4334924 111.0765,34.8364924 111.7175,33.5074924 C112.3595,32.1784924 113.9565,31.6204924 115.2855,32.2624924 C116.6145,32.9034924 117.1725,34.5014924 116.5305,35.8304924" class="sapIllus_ObjectFillColor"/>
    <path fill="var(--sapIllus_StrokeDetailColor)" d="M114.1256,32.4953924 C113.8846,32.4953924 113.6436,32.5353924 113.4086,32.6173924 C112.8606,32.8083924 112.4196,33.2013924 112.1676,33.7243924 C111.9156,34.2473924 111.8816,34.8363924 112.0726,35.3843924 C112.2646,35.9323924 112.6566,36.3733924 113.1806,36.6253924 C114.2576,37.1463924 115.5606,36.6913924 116.0806,35.6123924 C116.3326,35.0903924 116.3666,34.5013924 116.1756,33.9533924 C115.9836,33.4053924 115.5916,32.9643924 115.0676,32.7123924 C114.7696,32.5673924 114.4486,32.4953924 114.1256,32.4953924 M114.1186,37.8413924 C113.6566,37.8413924 113.1886,37.7393924 112.7446,37.5253924 C111.1696,36.7653924 110.5066,34.8643924 111.2676,33.2893924 C112.0286,31.7143924 113.9286,31.0523924 115.5036,31.8113924 C116.2666,32.1803924 116.8406,32.8233924 117.1196,33.6233924 C117.3986,34.4243924 117.3496,35.2843924 116.9806,36.0483924 C116.4346,37.1803924 115.2996,37.8413924 114.1186,37.8413924" class="sapIllus_StrokeDetailColor"/>
    <path fill="var(--sapIllus_ObjectFillColor)" d="M208.6491,39.3419924 C208.0071,40.6709924 206.4101,41.2279924 205.0811,40.5869924 C203.7521,39.9449924 203.1951,38.3479924 203.8361,37.0189924 C204.4781,35.6899924 206.0751,35.1319924 207.4041,35.7739924 C208.7331,36.4149924 209.2911,38.0129924 208.6491,39.3419924" class="sapIllus_ObjectFillColor"/>
    <path fill="var(--sapIllus_StrokeDetailColor)" d="M206.2447,36.0070924 C206.0037,36.0070924 205.7627,36.0470924 205.5277,36.1290924 C204.9797,36.3200924 204.5387,36.7130924 204.2867,37.2360924 C203.7657,38.3150924 204.2197,39.6160924 205.2987,40.1370924 C206.3757,40.6570924 207.6787,40.2030924 208.1987,39.1240924 C208.7197,38.0460924 208.2657,36.7440924 207.1867,36.2240924 C206.8887,36.0790924 206.5677,36.0070924 206.2447,36.0070924 M206.2367,41.3530924 C205.7747,41.3530924 205.3067,41.2510924 204.8627,41.0370924 C204.0997,40.6690924 203.5257,40.0260924 203.2477,39.2260924 C202.9687,38.4250924 203.0177,37.5650924 203.3867,36.8010924 C204.1477,35.2270924 206.0477,34.5630924 207.6227,35.3230924 C209.1967,36.0840924 209.8597,37.9850924 209.0987,39.5600924 C208.5527,40.6920924 207.4177,41.3530924 206.2367,41.3530924" class="sapIllus_StrokeDetailColor"/>
    <path fill="var(--sapIllus_BackgroundColor)" d="M204.3759,91.9310924 L115.5039,88.5950924 L116.2749,68.0720924 C116.2999,67.3910924 116.8729,66.8600924 117.5539,66.8860924 L203.9599,70.1290924 C204.6409,70.1540924 205.1719,70.7270924 205.1459,71.4080924 L204.3759,91.9310924 Z" class="sapIllus_BackgroundColor"/>
    <polygon fill="var(--sapIllus_Layering2)" points="203.559 113.687 114.687 110.351 115.504 88.595 204.376 91.931" class="sapIllus_Layering2"/>
    <path fill="var(--sapIllus_Layering1)" d="M201.5133,135.298892 L115.1073,132.055892 C114.4263,132.029892 113.8953,131.457892 113.9213,130.776892 L114.6913,110.253892 L203.5633,113.588892 L202.7923,134.111892 C202.7673,134.792892 202.1943,135.324892 201.5133,135.298892" class="sapIllus_Layering1"/>
    <path fill="var(--sapIllus_StrokeDetailColor)" d="M203.5181,140.719992 L108.4121,137.082992 L111.0651,66.2439924 C111.0751,65.9689924 110.8601,65.7369924 110.5831,65.7259924 C110.2901,65.7329924 110.0761,65.9319924 110.0651,66.2069924 L107.392765,137.549992 C107.3831,137.824992 107.5981,138.057992 107.8741,138.068992 L107.8931,138.068992 C107.8981,138.068992 107.9031,138.065992 107.9081,138.065992 L203.4791,141.719992 L203.4981,141.719992 C203.7661,141.719992 203.9881,141.507992 203.998435,141.239992 C204.0081,140.962992 203.7931,140.730992 203.5181,140.719992" class="sapIllus_StrokeDetailColor"/>
    <polygon fill="var(--sapIllus_ObjectFillColor)" points="104.191 129.444 102.746 125.665 153.119 109.386 188.299 111.961 218.045 96.785 220.426 101.156 189.348 117.009 153.731 114.405" class="sapIllus_ObjectFillColor"/>
    <path fill="var(--sapIllus_AccentColor)" d="M104.351,126.656892 C103.943,126.641892 103.568,126.385892 103.43,125.988892 C103.251,125.475892 103.534,124.919892 104.064,124.747892 L152.504,108.829892 L187.913,111.552892 L216.425,96.9228924 C216.919,96.6708924 217.53,96.8548924 217.791,97.3348924 C218.052,97.8138924 217.864,98.4058924 217.37,98.6578924 L188.344,113.549892 L152.764,110.814892 L104.711,126.605892 C104.592,126.644892 104.47,126.660892 104.351,126.656892" class="sapIllus_AccentColor"/>
    <path fill="var(--sapIllus_ObjectFillColor)" d="M218.1031,84.9797924 C217.5441,83.4507924 215.8221,82.6397924 214.2591,83.1767924 L184.2291,93.4187924 L151.6081,96.9017924 L151.4821,96.9157924 L105.7191,114.056792 C104.8901,114.368792 103.3501,115.203792 102.8411,116.358792 C102.6201,116.860792 102.6041,117.377792 102.7951,117.855792 C103.2361,118.952792 104.2961,119.690792 105.4991,119.735792 C105.5391,119.737792 105.5791,119.738792 105.6191,119.738792 C105.9841,119.738792 106.3431,119.672792 106.6831,119.545792 L152.9161,102.717792 L185.4641,99.2437924 L216.2541,88.7677924 C217.0291,88.5047924 217.6471,87.9587924 217.9951,87.2327924 C218.3351,86.5207924 218.3741,85.7207924 218.1031,84.9797924" class="sapIllus_ObjectFillColor"/>
    <path fill="var(--sapIllus_BrandColorSecondary)" d="M105.5191,116.029492 C104.7371,116.000492 104.0091,115.529492 103.7071,114.776492 C103.3021,113.766492 103.8181,112.631492 104.8591,112.241492 L150.5021,95.1434924 L183.2341,91.6494924 L213.3711,81.3714924 C214.4231,81.0114924 215.5791,81.5484924 215.9521,82.5704924 C216.3251,83.5914924 215.7741,84.7104924 214.7211,85.0694924 L184.1471,95.4964924 L151.4781,98.9844924 L106.3241,115.898492 C106.0591,115.998492 105.7861,116.039492 105.5191,116.029492" class="sapIllus_BrandColorSecondary"/>
</svg>`;

    return sceneSvg;

});
