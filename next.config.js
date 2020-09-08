module.exports =  {
    redirects() {
        return [{
            source: "/failure",
            destination: "/success",
            permanent: false
        }
        ]
    }
}