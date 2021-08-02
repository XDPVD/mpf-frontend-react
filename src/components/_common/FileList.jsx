import React, { useEffect, useRef } from 'react';
import FileItem from '@components/_common/FileItem';
import { useStyles } from './_styles';

function FileList({ blockAllActions, currentFiles }) {
  const classes = useStyles();

  // reference for tray file list
  const refFileList = useRef();

  const fileItems = currentFiles?.map((file) => {
    return (
      <FileItem data-testid="file-item" file={file} deleteButton={false} />
    );
  });

  useEffect(() => {
    let lastElemFile = refFileList.current.lastChild;
    lastElemFile?.scrollIntoView({ behavior: 'smooth' });
  }, [currentFiles]);

  return (
    <li ref={refFileList} className={classes.fileList}>
      {fileItems}
      {blockAllActions && fileItems?.length === 0 ? (
        <p>No hay archivos</p>
      ) : (
        <></>
      )}
    </li>
  );
}

export default FileList;
