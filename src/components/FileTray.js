import React, {
    useEffect,
    useState
} from 'react';

import styled from "styled-components";

function FileTray() {

    const [files, addFile] = useState([]);

    useEffect(() => {

        console.log("=====FileTray=====");



        console.log("++++FileTray+++++");

        return () => {

        }
    })

    const onFilesAdded = (file) => {
        addFile(
            prevState => prevState.concat(file)
        )
    }

    // https://www.youtube.com/watch?v=41vjTLb8v0Q
    // https://react-dropzone.js.org/

    return (
        <Upload>
            <Title>Upload Files</Title>
            <Content>
                <Files />
            </Content>
            <Actions />
        </Upload>
    )
}

export default FileTray

const Upload = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    text-align: left;
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
    box-sizing: border-box;
    width: 100%;
`;

const Files = styled.div`
    margin-left: 32px;
    align-items: flex-start;
    justify-items: flex-start;
    flex: 1;
    overflow-y: auto;
`;

const Actions = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    align-items: flex-end;
    flex-direction: column;
    margin-top: 32px;
`;

const Title = styled.span`
    margin-bottom: 32px;
    color: #555;
`;