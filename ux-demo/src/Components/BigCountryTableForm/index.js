import {Field, Form, Formik} from 'formik'

const validation = (values) => {
  const error = {}

  if (!values.id) {
    error.id = 'Id is required!'
  }

  if (!values.name) {
    error.name = 'Name is required!'
  }

  if (!values.capital) {
    error.capital = 'Capital is required!'
  }
  if (!values.language) {
    error.language = 'Language is required!'
  }

  if (!values.currency) {
    error.currency = 'Currency is required!'
  }

  return error
}

const nameValidation = (value) => {
  let error
  if (!value) {
    error = 'name is required!'
  }
  return error
}


const BigCountryTableForm = ({initialData, handleSubmit}) => {

  return <div>
    <Formik
      initialValues={initialData}
      onSubmit={(values) => {
        handleSubmit(values)
      }}
      validate={validation}
    >
      {({errors, touched}) => (
        <Form>
           <label htmlFor="id">Id</label>
            <Field id="id" name="id" placeholder="id"/>
            <span style={{color: "red", fontSize: "10px"}}>{touched.id && errors.id}</span>
          


          <label htmlFor="name">Name</label>
          <Field
            id="name"
            name="name"
            placeholder="name"
            validate={nameValidation}
          />
          <span style={{color: "red", fontSize: "10px"}}>{touched.name && errors.name}</span>

          <label htmlFor="capital">Capital</label>
          <Field id="capital" name="capital" placeholder="capital"/>
          <span style={{color: "red", fontSize: "10px"}}>{touched.capital && errors.capital}</span>

          <label htmlFor="language">Language</label>
          <Field id="language" name="language" placeholder="language"/>
          <span style={{color: "red", fontSize: "10px"}}>{touched.language && errors.language}</span>

          <label htmlFor="currency">Currency</label>
          <Field id="currency" name="currency" placeholder="currency"/>
          <span style={{color: "red", fontSize: "10px"}}>{touched.currency && errors.currency}</span>

          <button className = "btn-primary" type="submit">Add</button>
        </Form>
      )}
    </Formik>
  </div>
}

export default BigCountryTableForm