  <script setup>
  // import libraries
  import { ref } from 'vue';
  import { useForm } from 'vee-validate';
  import { toTypedSchema } from '@vee-validate/yup';
  import * as yup from 'yup';
  // import { useformstore } from '../stores/formstore';
  
  // define state of checkbox
  const isChecked = ref(false);
  
  // handle input validation
  const { errors, defineField } = useForm({
    validationSchema: toTypedSchema(
      yup.object({
        firstname: yup.string().required('First name is required'),
        lastname: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid   email format').required('Email is required'),
        country: yup.string().required('Please   select a country'),
        zipcode: yup.string().required('Please enter a valid Zip code in one of the formats: ##### or #####-####'), 
        sex: yup.string().required('Sex assigned at birth is required'),
        D_o_b: yup.string().required('Date of Birth is required'),
        hcode: yup.string().required('Teladoc Health Code is required'),
      })
    ),
  });


  // define inputs and attributes and assign them to their fields
  const [firstname, firstnameAttrs] = defineField('firstname');
  const [lastname, lastnameAttrs] = defineField('lastname');
  const [email, emailAttrs] = defineField('email');
  const [country, countryAttrs] = defineField('country');
  const [zipcode, zipcodeAttrs] = defineField('zipcode');
  const [sex, sexAttrs] = defineField('sex');
  const [D_o_b, D_o_bAttrs] = defineField('D_o_b');
  const [hcode, hcodeAttrs] = defineField('hcode');
  
  const next_step = async () => {
    // const { errors } = this.$v;
    // if (Object.keys(errors).length === 0) {
    //   formstore.updateFormData('firstname', firstname.value);
    //   formstore.updateFormData('lastname', lastname.value);
    //   formstore.updateFormData('email', email.value);
    //   formstore.updateFormData('country', country.value);
    //   formstore.updateFormData('zipcode', zipcode.value);
    //   formstore.updateFormData('sex', sex.value);
    //   formstore.updateFormData('D_o_b', D_o_b.value);
    //   formstore.updateFormData('hcode', hcode.value);
    //   formstore.nextStep();
    // }
};
  </script>
<template>
  <!-- fontawesome online cdn link -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <!-- form start -->
  <form class="p-2">
    <h2 class="">Let's get started</h2>
    <p class="mt-3 mb-5">Enter your information just as it appears on your health insurance card or pay stub.</p>

    <small class="">
      *Required
    </small> <br>
    
    <p class="mt-5"></p>
    <!-- input section start -->
    <label :class="{ 'text-red-700': errors.firstname }" for="firstname">First Name*</label>
    <input class="mb-10 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" v-model="firstname" v-bind="firstnameAttrs"  :class="{ 'border-red-700': errors.firstname }" placeholder="First Name" >
    <div v-if="errors.firstname" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:red; margin-top: .3rem; "></i>
      {{ errors.firstname }}
    </div>

    <label :class="{'text-red-700': errors.lastname}" for="lastname">Last Name*</label>
    <input class="mb-10" type="text" v-model="lastname" placeholder="Last Name" v-bind="lastnameAttrs" :class="{'border-red-700': errors.lastname}" >
    <div v-if="errors.lastname" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:red; margin-top: .3rem; "></i>
      {{ errors.lastname}}
    </div>

      
    <label :class="{'text-red-700': errors.email}" for="email">Email*</label>
    <input class="mb-10" type="text" v-model="email" placeholder="" v-bind="emailAttrs" :class="{'border-red-700': errors.email}" >
    <div v-if="errors.email" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:red; margin-top: .3rem; "></i>
      {{ errors.email }}
    </div>

    <label :class="{'text-red-700': errors.country}" for="Country">Country*</label>
    <select class="bg-white border border-gray-900 rounded-lg p-3 mb-10" name="country" id="" v-model="country" v-bind="countryAttrs" :class="{'border-red-700': errors.country}"  >
      <option value="" disabled>Select</option>
      <option value="nigeria">nigeria</option>
    </select>
    <div v-if="errors.country" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:red; margin-top: .3rem; "></i>
      {{ errors.country }}
    </div>

    <label :class="{'text-red-700': errors.zipcode}"  for="zipcode">ZIP code*</label>
    <input class="mb-10" type="text" v-model="zipcode" v-bind="zipcodeAttrs" :class="{'border-red-700': errors.zipcode}" placeholder="##### or #####-####" >
    <div v-if="errors.zipcode" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:red; margin-top: .3rem; "></i>
      {{ errors.zipcode }}
    </div>

    <label :class="{'text-red-700': errors.sex}" for="Sex">Sex assigned at birth*</label>
    <select class="bg-white border  border-gray-900 rounded-lg p-3 mb-10" v-model="sex" v-bind="sexAttrs" :class="{'border-red-700': errors.sex}" >
      <option value="">Please select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <div v-if="errors.sex" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:red; margin-top: .3rem; "></i>
      {{ errors.sex }}
    </div>

    <label :class="{'text-red-700': errors.D_o_b}" for="">Date Of Birth*</label><br>
    <small>MM/DD/YYYY</small>
    <input class="mb-10" type="date" v-model="D_o_b" v-bind="D_o_bAttrs"  placeholder="MM/DD/YYYY" :class="{'border-red-700': errors.D_o_b}" >
    <div v-if="errors.D_o_b" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:red; margin-top: .3rem; "></i>
      {{ errors.D_o_b }}
    </div>

  <div class="flex items-center">
      <input v-model="isChecked" id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
      <label for="link-checkbox" class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">I received a Teladoc Health code from my employer or insurance company.</label>
  </div>
  <div v-if="isChecked" class="mt-5 mb-3">
    <label :class="{'text-red-700': errors.hcode}" for="hcode">Teladoc Health Code</label>
    <input type="text" v-model="hcode" v-bind="hcodeAttrs" :class="{'border-red-700': errors.hcode}" >
    <div v-if="errors.hcode" class="mb-3">
     <i class="fa fa-exclamation-triangle" style="font-size:15px;color:red; margin-top: .3rem; "></i>
      {{ errors.hcode }}
    </div>
  </div>

  <!-- input section end -->
    
  </form>
  <!-- form end -->
</template> 




