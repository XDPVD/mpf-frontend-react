import { useCallback, useState } from 'react';

import { app, db } from "@settings/base";

function useFiles(props) {

    // two modes for the component
    const mode = {
        a: "assignments",
        p: "posts",
    };

     // Reference to the firestore collection, 
     // varies according to the established mode
    const fileCollection = db.collection(mode[props.mode]);
    
    // Reference to firestore
    const storageRef = app.storage().ref();
    // store the target_id
    const target_id = useState(props.target_id)[0];

    // function loadFiles
    const loadFiles = useCallback(
        async () =>{

            let files = [];
            
            const snapForEach = async (snap) => {
                try{
                    await Promise.all(snap?.map(async (doc) => {
                        let newFile = {
                            name: doc.data().name,
                            downloadUrl: doc.data().downloadUrl,
                        };
                        await files.push(newFile);
                    }));
                }
                catch(e){  
                    files = null;
                }
            }
            console.log('fileCollection ',fileCollection)

            let snap = await fileCollection?.doc(target_id)
                .collection("files")
                .get();

            await snapForEach(snap.docs);

            return files;
        },[fileCollection, target_id]);

    // remove all the files related to a pub with target_id
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


    // function to register a file desc on firestore (i = index, name, dowloadUrl is the related link)
    const insertFileRegister = async (i, name, downloadUrl, id) =>{
        await db
            .collection(mode[props.mode])
            .doc(id)
            .collection("files")
            .doc(i.toString())
            .set({
                name: name,
                downloadUrl: downloadUrl,
            });
    }

    // this is a function that retrieve the download url of a file
    const getDownloadURL = async (file) => {
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
    
        let downloadUrl = await fileRef.getDownloadURL();
        return downloadUrl;
    }

    // Nunc eleifend convallis urna in tristique. Ut id risus sapien. Morbi facilisis mattis tempus. Aenean ut molestie odio. Donec aliquam volutpat
    const uploadFiles = async ({editMode, currentFiles, previousFiles, id}) => {
        if (editMode) {
            deleteAllFiles() // possible error
            await Promise.all(previousFiles.current.map(async(file) => {
                let fileRef = await storageRef.child(file.path);
                await fileRef.delete();
            }));
        }

        await Promise.all(currentFiles.map( async (file, i) => {
            let downloadUrl = await getDownloadURL(file);
            await insertFileRegister(i, file.name, downloadUrl, id);
        }));
    }

    return [loadFiles, deleteAllFiles, insertFileRegister, getDownloadURL, uploadFiles];
}

export default useFiles;
