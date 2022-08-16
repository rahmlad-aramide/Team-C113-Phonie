const icon = document.querySelector(".image");
const number = document.querySelector(".number");
const button = document.querySelector(".go");
const form = document.querySelector(".form");
const phonie = document.querySelector(".phonie");

const carriers = {
  "MTN": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/600px-New-mtn-logo.jpg",
    "prefix": ["0803", "0806", "0703", "0706", "0813", "0816", "0810", "0814", "0903", "0906", "0913", "+234803", "+2340806", "+234703", "+234706", "+234813", "+234816", "+234810", "+234814", "+234903", "+234906", "+234913", "234803", "2340806", "234703", "234706", "234813", "234816", "234810", "234814", "234903", "234906", "234913"]
  },
  "GLO": {
    "src": "https://upload.wikimedia.org/wikipedia/commons/8/86/Glo_button.png",
    "prefix": [0805, 0807, 0705, 0815, 0811, 0905, +234805, +234807, +234705, +234815, +234811, +234905, 234805, 234807, 234705, 234815, 234811, 234905]
  },
  "AIRTEL": {
    "src": "",
    "prefix": [0802, 0808, 0708, 0704, 0812, 0701, 0901, 0902, 0904, +234802, +234808, +234708, +234704, +234812, +234701, +234901, +234902, +234904, 234802, 234808, 234708, 234704, 234812, 234701, 234901, 234902, 234904]
  },
  "9MOBILE": {
    "src": "",
    "prefix": [0809, 0818, 0817, 0909, +234809, +234818, +234817, +234909, 234809, 234818, 234817, 234909]
  }
}

let numPrefix;
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let numValue = number.value;

  if (numValue.substring(0, 4) == +234) {
    numPrefix = number.value.slice(0, 7);
  } else if (numValue.substring(0, 3) == 234) {
    numPrefix = number.value.slice(0, 6);
  } else {
    if(number.value.slice(0, 3) == 070 || 080 || 081 || 090 || 091){
    numPrefix = number.value.slice(0, 4);
    }
  }

  carriers.MTN.prefix.forEach(prefix => {
    if (numPrefix == prefix) {
      icon.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/600px-New-mtn-logo.jpg"
    }
  });
  
  carriers.GLO.prefix.forEach(prefix => {
    if (numPrefix == prefix) {
      icon.src = "https://upload.wikimedia.org/wikipedia/commons/8/86/Glo_button.png"
    }
  });
  
  carriers.AIRTEL.prefix.forEach(prefix => {
    if (numPrefix == prefix) {
      icon.src = "https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png"
    }
  });
  
  carriers["9MOBILE"].prefix.forEach(prefix => {
    if (numPrefix == prefix) {
      icon.src = "https://www.seekpng.com/png/detail/344-3443327_9mobile-mtn-glo-airtel-and-9mobile.png"
    }
  })
});

function handleChange(val){
  if(!val || val.slice(0, 3) != 070 || 080 || 081 || 090 || 091 ) {
    icon.src="https://play-lh.googleusercontent.com/vVYcdrgZ8RAlwzXM1XfgW_zQA7WW_ds8UcEfeoE_A8GZry-S_EPmCDySWchRN7paeBAB";
  }
}

