"use strict";

var whiteList = { 'AppleApril' : true };

var sbLogo = 'url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAABOCAYAAACe5qyEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFPJJREFUeNrsXQlUFNe2LZnBiUaiiQOQdo5GiaBG85yJsxBZyjPoU9AAxviclWdMPviCEZe6HJIfBZIlKhqFRNH3YoygEpOoRHxfERWNIBE1flFmGYX++5T3kqLpRuIPDdj3rHVXVd26dauqa59z9zl1u04zjUYjCRFibGIifgIhAvhChAjgCxEigC9EiAC+ECFNXcwMdaJmzZr9qf1pjo6wxeIgynBFdQZKAsrOZmNPJojH+wy/q5FE+ZoZ6kbrAfgE+JO1NIlF8YUC5Ao4C+A/N8Bn4N+BhZOiyhnFVrF9AWWENvjFuwshjRL4WS/2dmIgppLwwr2UhD+gDIuwCFIoQCyAP1kAX0ijBT4AP5yBdrjWrkiA31cP0DcxBSGrfgggj0SdM6NBHPyTUR8rgC+kUQGfWfgdOgCvFBXAn1sHnh8JkPti31vM+SVJQN2I9u3b1+j0zp07z9szdUPJQTmvZ78/SgyKGiW9Q4cOOc/xb6FXGjycCdATQP/nKaCXtLj8E2V6ErmJlJ5EcjJYtQ9A78MsPK8bzqJA+iQaJU5HfShKWi3HqdlxakXdVJTAOhY3HX0msX1c4hhYlUL7a1gsgNitsrLya63jq2Tz5s1rsAj76aefpj1+/Hgj1rMBdn9jtPhmDQx6H2bpnyqw9hfQnsD7FlOCYURvHvhkfY/lYvvIFyRm/YnmzGIKQeBfpHB8a/gKbm5usfHx8R5Y/QeKC6//9NNPl8+ZM2eqtbX158p6JmQpVcOHD98VFRXVG6MZgbMz6qZmZGTsrJPFMTGpMDU1DcFqPK8DILOcnZ1NmjdvTpth6E8NYLoxC01gzqHzol2ok5NTjHafjo6OMei3FevTRalYt27d6tC7d++/0/qDBw+W7N27t4u3t3eRmZlZIM6hYiNEvAB+IwI9WW60P8hAry1UNwsW/jVY9UMM4Hz0yHtKv6r33nvPo7y8vDgyMvKqn59fEt8xf/58JTXQtopvEvgTEhJe+eCDD4rWrFlDFj+MrD0AWYI6y1pvJiOjEgoTAsCt43XXr19P69evn92WLVv+e9y4cbP69u175+2335aBu3Dhws6hoaGzoYQbPD09Z+EcVL1OeR9QCAntbZkCmUJ5Nvbq1WsAb/Diiy+aODg4yOvjx4/vgHvWoFiB6r4EZflAWwkF8Bse9JzmONWy3xl9Oiu2L9SlU39//02TJ0+W0tPTV1y7do2URho0aJC0adMmqUWLFtKhQ3KVtGjRIunMmTNSYmKitGrVKqqKJz4MsHlBYeJmzZqV3q1bNzfU2aHO/9133yUlkEAnimr84GZmNliEr4OwKpe8vLzv7ezsrKEMkz/55JMJXl5e7X799ddkBnDpq6++mgKFsL948aI0ffr0ngpKxCWcRoU+ffrIGzjeEYs+M2bMqEAfMp2tqKiwxAgltWzZsuLIkSNEk4r5wUePHt2YlJS0zpg4vhzhMERRRm5QNPVQnCiag3KQOb3k/J5E0bBiS84tL0uWLBlx//59TXZ2djK23Xbu3KkBP76J9WgAPRHWsFDDBDThNuqnUhtImvK+qP3gwYNvYl1F27Nnz5aPWbFiRQH2ZSvL66+/zrv0Z8e6rF+//l5qamrRxx9//BrVHz9+/KZ8krS0U5cuXZJX2Xk127dvP01LKIeG13333XeJWATCyh9h7UkC0e/f+Abu5VFJSUmZcpuK5ndR0W9iKCw0hmJmYEtvq4i06I7+tGopmfXuIZn16i41a91Kris/fU6qzLwjVWTe1cse4ANkSGOfhC61LP9wFtXJVUR1VLD237zwguwXHCGr+/LLL+eDq98A5XAETRhw9uxZsrSSSqX6D6y8BhbXQ61WP9IRLQkAdZEY/3ZZuXKlXAmDXv67UZcNTLOioqoBIJ07xxhdLqF4LV++fFlZWdkSKJ+VvEOtHsLbzJw5U14ZM2bMIPDzq2vXrt2JQo635Ovre+DEiROeLi4ur1laWkpE2zCqrLSysmpN+/fs2VOcn59PFt+c6NvJkydLoWi0bePq6ioNHDgwt2PHjjkinFmP4UwAn+iNjy6wW/3VQ7JEMevVQ28flQB+SfQhqTh8t6TJL1DuojDnFhbvz9B3PAf+Dz/88LBdu3Z2zIkMIMBevnz5b7a2ttZ1uJV1zBF2U0RzCDjx5NyOHTs2DIAq0nUggQ08/iOMEJvYMbJERES4g3IdBNW4tnv37p6c4ihlyJAhOeD95ISuoxAkLH0onNUYFo6kSJKKqMrhw4dLQLUWQgHDCOicbjGKVbWNazGDoliw637T2MKZBhtaiIrooiiFH4ZqKvPyNdoCq6TRJ9Q+z2eBPsqzqDbggyYkP3r0qJJTBYgL6tOIoixdulRD9KewsFBD25y2kBw4cEATHBwcyWiBmxZVkOnCb7/9FslphJ5SCIueg7Zx/HcBRXHHSFBBHVC/WM/Sdc83b97UFBQU0LFh3t7ePyopExV3d3fedCr68Y+Li9PQfX722WePiBrRNglt87qcnJwi6o/TP2OiOoYE/iZtkJbsi632cJPOndP4zXlH81pf56oyYdx4zeFDh3QqQC3g99Gl4MTTiWvDwkYogC/zfTi3EQTArKysiocPH34N53Ir2moIULCENxk3TsBCzfk67SdAMd8g9MqVK2VUOLhAQUqUYKPCuHYonZfOQeAkRaPbJwXk/WoVed+FCxeu4PgfSQmZgvD7UoeEhCgVOYyug/P50tLSEnaOKn7PlY2UxxiBb8gXWNVCkc3/GShTGy5B/xUk+b3jJyUlJVU76O7du/K+Des31Oiw5ZYQmSbpkE16roFi315BQUE3GO1Jh3Prs3HjxhPguXNAE3JPnTr1k52dnaeDg0MKxeZxPfH9+/d3ioqKumpqaurM4umdz5w5Q6+iwzt16lRMvgH5CS+99NJj0Ia7Q4cO/cHZ2fk6/AZLoha0TQX7TEAvzMlPwHrg3r17Z2/durUII0U+4/2u6NeLKIdWIWoVD1/CHOdyoUiUtbX1KsV9ueA6+Dr5IGpcvznxe0dHx1JcRxFGDOncuXNltA2qZ3r06FETLX/DqMSQwK8irsTjrf1mVO1IOHlS+tfhw7UevHfPHlkJtH0D88H9dTW31QpvKoVi1eoePXqU/i9kwoQJO7Zt21YETrweAL/s6enJncowAC6NXiAR+MCxu/n5+X1LPgG2OT9Xg49TgOA8ll3IR4A1tQQoHW1sbBzbtm2rIQtP21T69OljpQBbOuiGL8qZLl26tGKAddu1a1c0RgF6gSaRg6245nTcf3sLCwsrOKu/shBm1Rvkbt268X5VuKcBt2/f/nn69OnuuNY3vby8frl169Yl3N8MHx+fkyNGjLCEkkr37t37RjJSaZA4vsW4kdW2w7aHVePhBPDu3btLk9wnVbP0pCDe06dXO9a0U/tnuQQXWHhLAOwYLPG/p02b5gBHdyGBlkCHEUEC/5UbLl68WOrcuXMFAOT5+eefH9Z6U+pKFhyjRuqgQYNkxYaf8B/QH4r+tLtx44YGI0gmFCaVwEkRH/Zi7Dz6k6NDHh4e0QpL7QJwlhcXF99Yu3ZtCujYVAbmwIsXL87at2+f7KC2atVqn/b9dO3atbysrOwSRoVl4eHhpEgD2HQH+b0Ek+g1a9bIK6BUtJiAMhjFzuiQb0COX8XBS789Xo2rcz6/fdt2eRsWTTP0L0OqcX0qe6KiavD8nFFTdHH8HD0cXy7cEQT43gf/LSZeT/wb4M0B8K/DSl8Bnw6EAubRPgDJXft+0I+KuDbJkSNHVih8hmwqxN0Vl5mtcIbTlNycnExFLD2Ox+GJp2dmZso+AjmhKSkpR2mdObjZ/L0B64f61IDKfE33Rk45XQ85xNxJ54VfM61DIfOYzyKJOH79yQU2nUCOy1uMHVmjQcDcgCfcvWVLueAhVzdrrq7Vtqmfx5dTdZ1rSy3XoR4wYACflrDCxMQkC7w6hPH/uP3799v7+vp27du3bygsb+WxY8dGAiDfa091SE5OvmJlZUVhwUJYzwXLli2TAHYKFVqycKE8HRV+gVxHoUyMDg/Ql5dyqhCsNz2IXHD3HFh5N8Wb2DiVSmWJ68kGbTo3adKkMbR+/PhxM2bRaZiU+xo7dqwcVkX/sfBJPqZ+wfnnzJw5syt8iJ9Bg+axfqdOnDgxEEp4Bxzfg717SBdUp35lC5+mULL/kGSzbF6VYzp8xAiZxpAT6w56s2fP3hp8ntoQ/amy4PkFUr7vQn0Ktrk2mvPKK6/IK4mJif1g9Qk0NKErDI5oT4p3E7dOS0sr9vb2LgMVSWAcm8p5yEO1Wn2msLDQDGDMHT16dFZwcHDXsLCwovv371+FdX4AhXmkfVJw/OZt2rS5x5zjGFZUPXv2LAPok6BgX9OLKox2i6EMNGKpcf7V8D8mwhqPOX369LdLliz5kKYqgD6lgqLJs0AB3Hj+0uzVV1/9N/kfNJEtIiIi1N7e/hKUewCf6EbzeXDvxebm5lc51aI6oxRDTlmgiWacjhBF4fF7PASd1IYXCnES/al65Z5yVZPdf7ROiqPPqVVQnVD2aj+JQpi8Twr/ET0YNWpULNoE8pBlbGzsL+Dwt+X3B5WVuXPnzoXfePtRdHT0yxR3p3AjUQYcn8loSK3CpkKo+XQHojE0PYEoCFEVJZVavnx5HIUhY2JiohT1oXROOKa/YNuNx+x5aFbRjkK3GgrdQiHXaV3GVEU7yRipjqHf3Noyq/8Wd0xbbA6RIzNEa8jJJcvPrT29UicHd5K7e5WVL46Ikoo2fKbP0k/W9+aW7pNZt7iQkJCuoFI/bty4cfobb7whffnll9yih/OIDVlN6cmsTLKsLgMHDswDBZoP4NMLsjcV7VyYFXeRqs/L1yV0jCuOTWfHpoHj34EipoO+XFXO1mT9xrEoUrUpyNhH9TSpjN66hs2bN89/1apVAVqRHnl+Pl2Xg4ND6HQWFIC1/0dAQIDyPFXtjenNbYP8AwsKEIwF8RRbHt58Ml2he43wJHH4ipRrUunRE1IZih5ZDcAHP21kYw/Zn08xYGCty1RcArRK0v+vpmcVf9bn/6ffqezawvXsV7E20tPOJYBfz8Bn4Hdi4PeRqn8Zoa5C83MiyXeobX6OEvhChDQ48LWUgKjPMOn3LyvoU4QERmm+B9hj/6gvI0SIwYEvREhjEvHtTCEC+EKECOALESKAL0SIAL4QIQL4QoQ0RWm6iSGeEoatj8+SNyYRYegmAvyGAsbzpAAC7ILq1BnQAixCmozF1warPpDrqhdAF9LkgK8PtPL8aT3g16Uk2nW1HS9EAL9Rc1dd4NV1HG/XGCy/GH0aMVVuwlkPG326TwF8AfxGle6zvu+Z36sAvgC+SPcpRAD/aSLSfQoxKuCLdJ9CjAr4It3nnyoi3WcdRKT7fCIi3aeRiUj3KdJ91pruk0bq7Oxsvhlc35iws7MLNgQLEek+RbrPWtN9EgjZl6ODDYELKFmwIc4l0n2KdJ96031ilJC4sjyLqFQqClSQ4qzW1+b+/fst27ZtW/DcUx0WudlRD13nMmrTV/r9a8nD9CnDtGnTRsybN28WHsqlIUOGpK5du5asWwYe9rn9+/c7rl+/vheogcw5MjMz7wDci9GGfIF0hTNIn/CL8fX17Q8r24/qKPmbTMIDAwsB5HLlOQEiFSkQdzzpM4GLFy/+ZtKkSSYHDhxwXblyZf/OnTuPVqvVdlDG9gRUOh/OK/sQZ8+e9QgICJCTRtBXlukjs8eOHft59OjR6TExMUuojl1XzoYNGxYuW7ZsF1dAAL+cZWMxxcimVEIJirpF18djMTJIKSkpz/QwWrduHQR/o2odyr3aaDm+SPfZtNJ9koJpcfw6CUaVKtAr6woKChoN+EW6T5HuU2+6Tx6CZsCvE++2sbEJqm0/lH/106gOjM3zw/FZrL4G6CkXlvJb+VzAuat9D1+OhHRqL9ksfVc+pmDhB8qPyNJIQj94EM6zGODX+318ACIZjp6KrDmzpGTBA5cuXWqNH5woCj08acGCBXL7L774Ql4ePHhQSk5O3hkUFETAcwMHP8TBxAMS58+fH2xvb19Uy8/wCE4kRVYGMQdZOn36tDu4+EE4riYA9oIbN258iXV7HQ6xqrCwMBe+B0WT/gLQc1+D+H2Ah4eHbMHc3d1nAviqHj16EMgoM4qscLTt5uZGSsaV0ALnLYay/2mJISwsLIKgWE9tg5GtwS2/IalOjSwOLTeHVMt8eD4pSf5UuDLzIVlpypTCPxXOR4hWO7bIiSF0fEGZ0ormAvyROq5hKihCR9CAL/AA3uGnBd9/B9zZu1OnTrMpB1ZpaWksAH4Hju7fAShp27ZtGbDITuDipLxkdaNhgW3I+SNgjRo1KgN0ITA+Pt6bIiAJCQkytwfYTCnRGiWX45c+e/bs5rC055nzuNXZ2Xk+aEEzpoBhI0eOtKd+tYT2qeCUlqLPXlOmTHmjuLj4ARQknPkKavgrShrlj7pyKLA58Xn0X0r5vWgn5/fYrsTx1tKf+AVoAjQUu1aLD6r1KRZthg4d+rAhgS/SfYp0n+lKasOT3j2rkMXnhUBORVlH0tCgNzTwq4irodN9KrOySCLdZ72m+wSFqioc5Np1RhfVqeJ5It1no033SX6ODqmzs6kdzdFXZ5TAp1CltiMrh1fmzpX5PKUFmjh+gk56oy3lp5N0xvRpioO+Y1xdXeUpCHl5eWUfffTRh7CgFnBiS3bv3p0Lnp4FcDxOTU3dCYv9vrm5eQvQHE+AtxroaeoArLL8pjQxMbEtf3kUGRk5iEUvbGHlm40fP/5VgLwjhnlLOMPVqAVxcx7+5E52z549iQrt5KMSLXNzc4MwOJ2C0vRkDq4/iy7xkcelTZs25qBlFbif9+FgS8OGDSNrK2G72r1PnDhRIqo0Z84cysiYDyVxVY6M2sLepP4RB3c1lL3N0+qMCfgi3WcTS/f5R0HPRReHryuvh38V8bzN1RHpPht5uk9ch/br2wgD4OKOEugG+6+EMaT71EptKdJ96kn3aUg8iHSfBkj3ye9RpPusPd0n/e7G8u80o0j3qQV8ke5Tjwjg1zPwGfidJAOl+xT/sa37MxLAr2fgaylBvab7bKwPsy5/wDfEtSuvQwBfiJDnWERGFCEC+EKECOALESKAL0SIAL4QIQL4QoQ0Rfk/AQYA3CIT0/JeBP4AAAAASUVORK5CYII=)';

var sbImage = {
    width    : '30px',
    position : '0 0',
    date     : 'url(data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAYAAAA45qw5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAbhJREFUeNqMVLttwzAQpQ1nAGUEa4EAdpNerlNJI8gjxCPIXcrYI5hAFghHiEeIRhDrJIVzZ7wDXhja1gEPwom8z3tHcvL9WjiykyAIVvRvEPSCpftvraC4Ww9bdX52960bYbJ/P6HCleBdcBQsRsSXgg8tLNgIvODTjbNylnSvthfs0EABaNIa6z0aMxW0eCeIgjXtu2ReGPfGuICkEUwGNHBEE2YNlNEmJ6TUQdckYRC5lfX8isznOGPc4RsBh+Aa/h4FOjTDibRYKd+Y1Ngk/jMIOitckcxsVRLkqCFTKaI4F40YQ5qTSTmV+pDMrwQzY+zBssU/T6w7SrxCg/MbM15qo1PIuM0wMpmPNG/7r3u+cPViEltgf4Bv8ZHWz1IHwOQ84NTaf2PfIGgH9srwhXxHI2hpnhXy/XkwphkpGiQNJGWLx2VAogbrObPD6OEH+D1vml04VB11GOgeV0gcrsxwFONc4YDutihmM7V5rWiuLR1MU8cnc88p4vjJPKHgmgrVySk1ttrAo+AJMYHmbNcpZpQwbHKFI73VPRh4SFbT2pvgQRXQJ1AekQWKVzeulOZf/gowAMX1mOyMtRFmAAAAAElFTkSuQmCC)'
};


window.addEventListener('DOMContentLoaded', function () {

  var domSbLogo = document.getElementsByClassName('gn_logo')[0];
  domSbLogo.style.backgroundImage = sbLogo;

  var sb = function() {
      var domV = document.querySelectorAll('[class*="W_ico16 approve"]');
      for (var i = 0; i < domV.length; i++) {
          var domNs = domV[i].parentNode.parentNode.getElementsByClassName('WB_name');
          if (domNs.length) {
              var domN = domNs[0];
              var inWhiteList = false;
              for (var j = 0; j < domN.attributes.length; j++) {
                  if (domN.attributes[j].nodeName === 'nick-name') {
                      var userId = domN.attributes[j].nodeValue;
                      if (typeof whiteList[userId] !== 'undefined') {
                          inWhiteList = true;
                      }
                      break;
                  }
              }
              if (inWhiteList) {
                  continue;
              }
          }
          domNs = domV[i].parentNode.parentNode.parentNode.parentNode.getElementsByClassName('name');
          if (domNs.length) {
              domN = domNs[0];
              userId = domN.textContent;
              if (typeof whiteList[userId] !== 'undefined') {
                  continue;
              }
          }
          domV[i].style.backgroundImage    = sbImage.date;
          domV[i].style.width              = sbImage.width;
          domV[i].style.backgroundPosition = sbImage.position;
      }
  }

  setInterval(sb, 1000 * 1);
}, false);
