const parentElement = document.querySelector('.katas-list')

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
let kataList = document.createElement('div')
document.body.append(kataList)

// kata 1
let kata1 = document.createElement('div')
let kataOneHeading = document.createElement('h3')
kataOneHeading.append('kata 1')
kata1.append(kataOneHeading)
kataList.append(kata1)
for(let index = 1; index <=20; index +=1) {
    if(index === 20) {
        kata1.append(index)
    } else {
        kata1.append(index + ',')
    } }
    

// KATA 2

let kata2 = document.createElement('div')
let kataTwoHeading = document.createElement('h3')
kataTwoHeading.append('kata 2')
kata2.append(kataTwoHeading)
kataList.append(kata2)
for(let index = 2; index <=20; index +=2) {
    if(index === 20) {
        kata2.append(index)
    }else{
        kata2.append(index + ',')
    } 
}

// KATA 3

let kata3 = document.createElement('div')
let kataThreeHeading = document.createElement('h3')
kataThreeHeading.append('kata 3')
kata3.append(kataThreeHeading)
kataList.append(kata3)
for(let index = 1; index <=20; index +=2) {
    if(index === 20) {
        kata3.append(index)
    } else {
        kata3.append(index + ',')
    }
}

// KATA 4

let kata4 = document.createElement('div')
let kataFourHeading = document.createElement('h3')
kataFourHeading.append('kata 4')
kata4.append(kataFourHeading)
kataList.append(kata4)
for(let index = 5; index <=100; index +=5) {
    if(index === 100) {
        kata4.append(index)
    } else {
        kata4.append(index + ',')

    } }


// KATA 5

let kata5 = document.createElement('div')
let kataFiveHeading = document.createElement('h3')
kataFiveHeading.append('kata 5')
kata5.append(kataFiveHeading)
kataList.append(kata5)

for(let index = 1; index <=100; index ++) {
    const indexIsPerfectSquare = Number.isInteger(Math.sqrt(index))
    if(indexIsPerfectSquare && index  != 100) {
        kata5.append(index)
    } 
    if(indexIsPerfectSquare) {
        kata5.append(index + ',')

    } }


// KATA 6


let kata6 = document.createElement('div')
let kataSixHeading = document.createElement('h3')
kataSixHeading.append('kata 6')
kata6.append(kataSixHeading)
kataList.append(kata6)
for(let index = 20; index >=1; index --) {
    if(index === 1 ) {
        kata6.append(index)
    } else {
        kata6.append(index + ',')

    } }


// KATA 7

let kata7 = document.createElement('div')
let kataSevenHeading = document.createElement('h3')
kataSevenHeading.append('kata 7')
kata7.append(kataSevenHeading)
kataList.append(kata7)
for(let index = 20; index >=2; index -=2) {
    if(index === 2) {
        kata7.append(index)
     } else {
        kata7.append(index + ',')
    
   } }


// KATA 8

let kata8 = document.createElement('div')
let kataEightHeading = document.createElement('h3')
kataEightHeading.append('kata 8')
kata8.append(kataEightHeading)
kataList.append(kata8)
 for(let index = 19 ; index >=1; index -=2) {
      if(index === 1) {
       kata8.append(index)
     } else {
          kata8.append(index + ',')
   
     } }


// KATA 9

let kata9  = document.createElement('div')
let kataNineHeading = document.createElement('h3')
kataNineHeading.append('kata 9')
kata9.append(kataNineHeading)
kataList.append(kata9)
 for(let index = 100 ; index >=5; index -=5) {
      if(index === 5) {
       kata9.append(index)
     } else {
          kata9.append(index + ',')
   
     } }


// KATA 10

let kata10  = document.createElement('div')
let kataTenHeading = document.createElement('h3')
kataTenHeading.append('kata 10')
kata10.append(kataTenHeading)
kataList.append(kata10)
for(let index = 100; index >= 0; index --) {
    const indexIsPerfectSquare = Number.isInteger(Math.sqrt(index))
    if(indexIsPerfectSquare){
        kata10.append(index + ' ')
    }
}


// KATA 11

let kata11 = document.createElement('div')
let kataElevenHeading = document.createElement('h3')
kataElevenHeading.append('kata 11')
kata11.append(kataElevenHeading)
kataList.append(kata11)
for(let index = 0; index < sampleArray.length; index++){
    kata11.append(sampleArray[index] + ' ')
}


// KATA 12

let kata12 = document.createElement('div')
let kataTwelveHeading = document.createElement('h3')
kataTwelveHeading.append('Kata 12')
kata12.append(kataTwelveHeading)
kataList.append(kata12)
for(let index = 0; index < sampleArray.length; index++){
    if(sampleArray[index] % 2 === 0){
        kata12.append(sampleArray[index] + ' ')

    }
}




// KATA 13

let kata13 = document.createElement('div')
let kataThirteenHeading = document.createElement('h3')
kataThirteenHeading.append('Kata 13')
kata13.append(kataThirteenHeading)
kataList.append(kata13)
for(let index = 0; index < sampleArray.length; index++){
    if(sampleArray[index] % 2 != 0){
        kata13.append(sampleArray[index] + ' ')
    }
}



// KATA 14

let kata14 = document.createElement('div')
let kataFourteenHeading = document.createElement('h3')
kataFourteenHeading.append('Kata 14')
kata14.append(kataFourteenHeading)
kataList.append(kata14)
for(let index = 0; index < sampleArray.length; index++){
    kata14.append((sampleArray[index] * sampleArray[index]) + ' ')
}
      


// KATA 15

let kata15 = document.createElement('div')
let kataFifteenHeading = document.createElement('h3')
kataFifteenHeading.append('Kata 15')
kata15.append(kataFifteenHeading)
kataList.append(kata15)
let result15 = 0
for(let index = 1; index <= 20; index++){
    result15 += index
}
kata15.append(result15)

// KATA 16

let kata16 = document.createElement('div')
let kataSixteenHeading = document.createElement('h3')
kataSixteenHeading.append('Kata 16')
kata16.append(kataSixteenHeading)
kataList.append(kata16)

let result16 = 0
for(let index = 0; index < sampleArray.length; index++){
    result16 += sampleArray[index]
}
kata16.append(result16)

 // KATA 17

 let kata17 = document.createElement('div')
 let kataSeventeenHeading = document.createElement('h3')
 kataSeventeenHeading.append('Kata 17')
 kata17.append(kataSeventeenHeading)
 kataList.append(kata17)
 
 let smallestElement = sampleArray[0]
 for(let index = 0; index < sampleArray.length; index++){
     if(smallestElement > sampleArray[index]){
         smallestElement = sampleArray[index]
     }
 }
 kata17.append(smallestElement)
 


 // KATA 18

 let kata18 = document.createElement('div')
 let kataEighteenHeading = document.createElement('h3')
 kataEighteenHeading.append('Kata 18')
 kata18.append(kataEighteenHeading)
 kataList.append(kata18)
 let largestElement = sampleArray[0]
 for(let index = 0; index < sampleArray.length; index++){
     if(largestElement < sampleArray[index]){
         largestElement = sampleArray[index]
     }
 }
 kata18.append(largestElement)





    /// All contributing parties: Benjamin Scott, Justin Caudill, Sulaimon, Marshel Sendek, Elizabeth Johns