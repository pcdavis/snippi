let snippets = [];
let id = 0;

module.exports = {

    create: (req, res) => {
        id++;
        let newSnippet = {
            id: id,
            name: req.body.name,
            title: req.body.title,
            subtitle: req.body.subtitle,
            snippetText: req.body.snippetText,
            time: new Date()
        }
        snippets.push(newSnippet);
        console.log(snippets);
        res.status(200).send( "create success" );
    },

    read: (req, res) => {
        res.status(200).send( snippets );
        
    },

    delete: (req, res) => {
        // const deleteID = req.params.id;
        // let newArray = snippets.filter( (snippet) => {
        //     return snippet.id != deleteID
        //  })
        // console.log(newArray);
        // res.status(200).send("ok, we delted it")
        console.log(req.params.id);
        const deleteID = req.params.id;
        snippetID = snippets.findIndex( snippet => snippet.id == deleteID );
        snippets.splice( snippetID, 1 );
        res.status(200).send( "hello" );
        
    },

    // put: (req, res) => {
    //     let updatedSnippet = req.body;

    //     req.status(200).send( snippets );
    //     id++;
    // },

    // update: (req, res) => {
        
    //     id++;
    //     res.status(200).send( snippets );},

    // delete: (req, res) => {
        
    //     id++;
    //     res.status(200).send( snippets );

    // }
}


