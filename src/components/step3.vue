<script setup>
// import libraries
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { useformstore } from '../stores/formstore';
import { computed } from 'vue';

// initialize store function
const formstore = useformstore()

// display stored data
const displayeddata = computed(() => ({
  firstName: formstore.formData.firstname,
  lastName: formstore.formData.lastname,
  
}));
console.log('Form Data:', formstore.formData);

// handle form validation
const { errors, defineField } = useForm({
validationSchema: toTypedSchema(
yup.object({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid   email format').required('Email is required'),
  company: yup.string().required('Insurance company is required'),
  memberid: yup.string().required('Member ID is required'), 
  D_o_b: yup.string().required('Date of Birth is required'),

})
),
});
// define inputs and attributes and assign them to their fields
const [firstname, firstnameAttrs] = defineField('firstname');
const [lastname, lastnameAttrs] = defineField('lastname');
const [email, emailAttrs] = defineField('email');
const [company, companyAttrs] = defineField('company');
const [memberid, memberidAttrs] = defineField('memberid');
const [D_o_b, D_o_bAttrs] = defineField('D_o_b');


const next_step = async () => { 
    // const { errors } = validate();
    // if (Object.keys(errors).length === 0) {
    //   formstore.updateFormData('firstname', firstname.value);
    //   formstore.updateFormData('lastname', lastname.value);
    //   formstore.updateFormData('email', email.value);
    //   formstore.updateFormData('company', company.value);
    //   formstore.updateFormData('memberid', memberid.value);
    //   // formstore.updateFormData('sex', sex.value);
    //   formstore.updateFormData('D_o_b', D_o_b.value);
    //   // formstore.updateFormData('hcode', hcode.value);
    //   formstore.nextStep();
    // }
};
</script>

<template>
  <!-- fontawesome icon online cdn -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <!-- form start -->
  <form class="p-2">
    <h2 class="">Let's double check your information</h2>
    <p class="mt-3 mb-5">Make sure these details match your card.</p>

    <small class="">
      *Required
    </small> <br>

    <p class="mt-5"></p>

    <!-- input section start -->

    <label :class="{'text-red-700': errors.company}"  for="company">Insurance company*</label>
    <select class="bg-transparent border border-black rounded-lg  p-3 mb-10" name="" id="" v-model="company" v-bind="companyAttrs" :class="{'border-red-700': errors.company}">
        <option value="" class="bg-white option">Name of insurance company</option>
        <option value="medhealth">Medhealth</option>
        <option value="adenis">Adenis</option>
    </select>
    <div class="mb-5 flex gap-3 ml-2 " v-if="errors.company"><i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>{{ errors.company }}
    </div>


    <label :class="{'text-red-700': errors.memberid}" for="memberid">Member ID*</label>
    <input v-model="memberid" v-bind="memberidAttrs" :class="{'border-red-700': errors.memberid} " class="mb-10"/>
    <div class="mb-5 flex gap-3 ml-2 " v-if="errors.memberid"><i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>{{ errors.memberid }}
    </div>

    <label :class="{ 'text-red-700': errors.firstname }" for="firstname">First Name*</label>
    <input class="mb-10 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" v-model="firstname" v-bind="firstnameAttrs"  :class="{ 'border-red-700': errors.firstname }" placeholder="First Name">
    <div v-if="errors.firstname" class="mb-5 flex gap-3 ml-2 -mt-5">  
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>
      {{ errors.firstname }}
    </div>


    <label :class="{'text-red-700': errors.lastname}" for="lastname">Last Name*</label>
    <input class="mb-10" type="text" v-model="lastname" placeholder="Last Name" v-bind="lastnameAttrs" :class="{'border-red-700': errors.lastname}">
    <div v-if="errors.lastname" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>
      {{ errors.lastname}}
    </div>


    <label :class="{'text-red-700': errors.email}" for="email">Email*</label>
    <input class="mb-10" type="text" v-model="email" placeholder="" v-bind="emailAttrs" :class="{'border-red-700': errors.email}">
    <div v-if="errors.email" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>
      {{ errors.email }}
    </div>


    <label :class="{'text-red-700': errors.D_o_b}" for="">Date Of Birth*</label><br>
    <small>MM/DD/YYYY</small>
    <input class="mb-10" type="date" v-model="D_o_b" v-bind="D_o_bAttrs"  placeholder="MM/DD/YYYY" :class="{'border-red-700': errors.D_o_b}">
    <div v-if="errors.D_o_b" class="mb-5 flex gap-3 ml-2 -mt-5">
      <i class="fa fa-exclamation-triangle" style="font-size:15px;color:rgb(185 28 28 ); margin-top: .3rem; "></i>
      {{ errors.D_o_b }}
    </div>


    

    <!-- input section end -->

  </form>
  <!-- form end -->

</template>

<style scoped>

</style> 



