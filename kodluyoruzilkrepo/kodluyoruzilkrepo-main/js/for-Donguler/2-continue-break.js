const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur,', 'adipisicing', 'elit' 
  ]
  const UL_DOM = document.querySelector("#userList")

  for(index = 0; index < LOREM_LIST.length; index++){
      if(LOREM_LIST[index] == "dolor") {
        //   continue
        break
        }
      let LI_DOM = document.createElement("li")
      LI_DOM.innerHTML = LOREM_LIST[index]
      UL_DOM.append(LI_DOM)
  }