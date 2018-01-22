let snippets = [
    {
        id: 0,
        language: 'java',
        name: 'PETER',
        title: 'Quick fix to common error ',
        subtitle: 'A JavaScript snippet to fix something',
        snippetText: 'Hello World ',
        url: 'www.google.com',
        tags: 'js'      
      },
      {
        id: 1,
        language: 'java',
        name: 'Paul Davis',
        title: 'A Dead Simple React Form ',
        subtitle: 'A super easy way to insert a form in React',
        snippetText: 'lskdjf fsldkjs dfjdksfj dslkdjsdjf sdljf sldkfj ',
        url: 'www.google.com',
        tags: 'forms'      
      },
      {
        id: 2,
        language: 'java',
        name: 'Steven Harper',
        title: 'Display the current time as HH:MM ',
        subtitle: 'Four lines of code is all you need',
        snippetText: 'lskdjf fsldkjs dfjdksfj dslkdjsdjf sdljf sldkfj ',
        url: 'www.google.com',
        tags: 'time'      
      }
];
let tagArray = [
    {
        id: 7,
        language: 'java',
        name: 'YYYYOOOOOO',
        title: 'Arrrrrrrrrrrrrrrrrhhhhhh ',
        subtitle: 'Argh ou soiu s',
        snippetText: 'lskdjf fsldkjs dfjdksfj dslkdjsdjf sdljf sldkfj ',
        url: 'www.google.com',
        tags: 'fuckoff'      
      }
];
let id = 2;

module.exports = {

    create: (req, res) => {
        id++;
        let newSnippet = {
            id: id,
            name: req.body.name,
            title: req.body.title,
            subtitle: req.body.subtitle,
            snippetText: req.body.snippetText,
            tags: req.body.tags,
            time: new Date()
        }
        snippets.push(newSnippet);
        //console.log(snippets);
        res.status(200).send( snippets);
    },

    read: (req, res) => {
        res.status(200).send( snippets );
    },
    
    tags: (req, res) => {
         console.log("tag method fired")
         console.log(req.params.tags)
        let filterArray = snippets.filter( (snipp) => {
            return snipp.tags == req.params.tags
        })
        console.log(filterArray)
        return res.status(200).send( filterArray );
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


