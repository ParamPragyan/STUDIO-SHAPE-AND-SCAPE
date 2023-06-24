import React from 'react'
import img1 from "../../../assets/interior/person1/Daughter bedroom - view 1.jpg"
import img2 from "../../../assets/interior/person1/Pooja - view 1.jpg"
import img3 from "../../../assets/interior/person1/Pooja - view 2.jpg"
import img4 from "../../../assets/interior/person1/kitchen - view 1.jpg"
import img5 from "../../../assets/interior/person1/kitchen - view 5.jpg"
import img6 from "../../../assets/interior/person1/living - view 1.jpg"
import img7 from "../../../assets/interior/person1/living - view 3.jpg"
import img8 from "../../../assets/interior/person1/parents bedroom - view 1.jpg"
import img9 from "../../../assets/interior/person1/son's bedroom - view 1.jpg"








const Person1 = () => {
  return (
    <div className='h-[250vh]'>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={img1} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={img2} />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={img3} />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={img4} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={img5} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={img6} />
      </div>
    </div>
    <div class="flex w-full flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={img7} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={img8} />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={img9} />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Person1