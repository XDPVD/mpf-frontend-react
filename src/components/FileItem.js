import {
    Avatar,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete';

function FileItem({
    file,
    success,
    storeLink
}) {

    return (
        <>
        <ListItem>
            <ListItemAvatar>
            <Avatar>
                <FolderIcon />
            </Avatar>
            </ListItemAvatar>
                <ListItemText
                    primary= {file.path}
                    secondary= {file.size ? `${file.size} bytes` :"" }
                />
            <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon hidden={true} />
            </IconButton>
            {file.storeLink ? <a href={file.storeLink} target="_blank" rel="noreferrer">Descargar</a>: <></>}
            
            </ListItemSecondaryAction>
        </ListItem>            
        </>
    )
}

export default FileItem