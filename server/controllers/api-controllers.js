let snippets = [];
let id = 0;

module.exports = {

    create: (req, res) => {
        id++;
        let newSnippet = {
            id: id,
            author: req.body.author,
            title: req.body.title,
            subtitle: req.body.subtitle,
            instructions: req.body.instructions,
            time: new Date,
            url: url,
            tags: tags
        };
        snippets.unshift(newSnippet);
        res.status(200).send( snippets );
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


