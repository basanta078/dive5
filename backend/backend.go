package backend

import (
	"github.com/codegangsta/negroni"
	"github.com/gorilla/mux"
    "fmt"
    "net/http"
)

//initial negroni, mux test
func init() {
    router := mux.NewRouter()
    apiRoutes := mux.NewRouter()
    apiRouter := router.PathPrefix("/api/v1").Subrouter()

    apiRouter.HandleFunc("/", apiHandler)
	apiRouter.HandleFunc("/users", userHandler)
	apiRouter.HandleFunc("/users/{key}/", userDetailHandler)
	apiRouter.HandleFunc("/dives", productHandler)

	router.PathPrefix("/api").Handler( negroni.New(
		//need to add authentication middleware here
		negroni.Wrap(apiRoutes),
	))
	http.Handle("/", router)


}


func apiHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "apiHandler")
}

func userHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "userhandler")
}

func productHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "productHandler")
}

func userDetailHandler(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	key := params["key"]
    fmt.Fprint(w, "userDetailHandler " + key)
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world!")
}