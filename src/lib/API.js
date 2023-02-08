import config from '../config'

const fetchData = () =>
  new Promise((resolve, reject) => {
    fetch(config.getURL)
      .then((result) => result.json())
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  })

export { fetchData }
