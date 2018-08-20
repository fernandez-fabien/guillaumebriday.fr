import axios from 'axios'
import qs from 'qs'

class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor (data) {
    this.originalData = data

    for (let field in data) {
      this[field] = data[field]
    }
  }

  /**
   * Fetch all relevant data for the form.
   */
  data () {
    let data = {'form-name': 'comment'}

    for (let property in this.originalData) {
      data[property] = this[property]
    }

    return data
  }

  /**
   * Return true if the form is incompleted.
   */
  incompleted () {
    return !this.completed()
  }

  /**
   * Return true if the form is completed.
   */
  completed () {
    for (let field in this.originalData) {
      if (this[field] === '' || this[field] === null) {
        return false
      }
    }

    return true
  }

  /**
   * Reset the form fields.
   */
  reset () {
    for (let field in this.originalData) {
      this[field] = ''
    }
  }

  /**
   * Send a POST request to the given URL.
   * .
   * @param {string} url
   */
  post (url) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(this.data()), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error.response.data)
        })
    })
  }
}

export default Form
