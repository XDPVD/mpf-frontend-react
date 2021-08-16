import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';

// a auctor hendrerit. Praesent sit amet mauris ac sapien placerat auctor. Ut lorem leo, egestas ornare felis nec, mole
function FileItem({ file, deleteButton }) {
  return (
    <>
      <ListItem data-testid="list-item">
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={file.path}
          secondary={file.size ? `${file.size} bytes` : ''}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon hidden={!deleteButton} />
          </IconButton>
          {file.downloadUrl ? (
            <a href={file.downloadUrl} target="_blank" rel="noreferrer">
              Descargar
            </a>
          ) : (
            <></>
          )}
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
}

export default FileItem;
