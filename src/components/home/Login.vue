<template>
  <div class="container">
    <div class="mt-5"></div>
    <div class="row justify-content-center">
      <div class="col-sm-12 text-center"><h4>Admin Login</h4></div>
      <div class="col-sm-8">
        <b-form @submit="onSubmit">
          <b-form-group id="exampleInputGroup1"
                        label="Email address:" label-for="exampleInput1"
                        description="We'll never share your email with anyone else.">
            <b-form-input id="exampleInput1"
                          type="email" v-model="form.email" required
                          placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2"
                        label="Your Name:" label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="text" v-model="form.name" required
                          placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup3"
                        label="Food:" label-for="exampleInput3">
            <b-form-select id="exampleInput3"
                          :options="foods" required
                          v-model="form.food"
            ></b-form-select>
          </b-form-group>
          <b-form-group id="exampleGroup4">
            <b-form-checkbox v-model="form.checked" id="exampleInput4">
              Check me out
            </b-form-checkbox>
          </b-form-group>
          <b-button type="submit" variant="primary" @click="redirect('admin-home')">Submit</b-button>
          <b-button type="reset" variant="secondary">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import helper from '@/mixins/helper'

export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: false,
        secret: 'S3CR3T'
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ]
    }
  },

  mixins: [helper],

  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>