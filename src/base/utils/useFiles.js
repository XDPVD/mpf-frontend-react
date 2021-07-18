import React, { useCallback, useState } from 'react';

import { app, db } from "@settings/base";

import { useCollection, useDocument, useDocumentOnce } from "react-firebase-hooks/firestore";

function useFiles(props) {

    // two modes for the component
    const mode = {
        a: "assignments",
        p: "posts",
    };

     // Reference to the firestore collection, 
     // varies according to the established mode
    const [fileCollection,,] = useCollection(
        db.collection(mode[props.mode])
    );

    

    // Reference to firestore
    const storageRef = app.storage().ref();
    
    const target_id = useState(props.target_id)[0];

    const [document]= useDocumentOnce(db.doc(`${mode[props.mode]}/${props.target_id}`));

    console.log(`${mode[props.mode]}/${props.target_id}`);
    console.log('document ',document);
    const loadFiles = useCallback(
        async () =>{

            let files = [];
            
            const snapForEach = async (snap) => {
                try{
                    await Promise.all(snap?.map(async (doc) => {
                        let newFile = {
                            path: doc.data().name,
                            downloadUrl: doc.data().downloadUrl,
                        };
                        await files.push(newFile);
                    }));
                    console.log('Promise.all is executed');
                }
                catch(e){
                    console.log('Promise.all param is undefined');
                    files = null;
                }
            }

            // let snap = await fileCollection?.doc(target_id)
            //     .collection("files")
            //     .get();
                
            //await snapForEach(snap);
            console.log(files);
            return files;
        },[fileCollection, target_id]);

    const deleteAllFiles = useCallback(
        () => {
            fileCollection
                .doc(target_id)
                .collection("files")
                .get()
                .then((snap) => {
                    snap.forEach((doc) => {
                        doc.ref.delete();
                    });
                });
        },[fileCollection, target_id]);



    const insertFileRegister = async (i, name, downloadUrl, target_id) =>{
        await db
            .collection(mode[props.mode])
            .doc(target_id)
            .collection("files")
            .doc(i.toString())
            .set({
                name: name,
                downloadUrl: downloadUrl,
            });
        console.log("insertFileRegister END");
    }

    const getDownloadURL = async (file) => {
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
    
        let downloadUrl = await fileRef.getDownloadURL();
        return downloadUrl;
      }

    return [loadFiles, deleteAllFiles, insertFileRegister, getDownloadURL];
}

export default useFiles;
