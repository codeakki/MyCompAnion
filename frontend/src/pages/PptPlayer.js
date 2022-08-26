import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import ReactAudioPlayer from 'react-audio-player';
import {
    Card,
    Col,
    Row
} from "antd";
// import Players from './Player';
import PPT from './PowerPoint'
import music from '../assets/images/mymusic.mp3'
import 'quill/dist/quill.snow.css';


const PptPlayer = () => {
    const { quill, quillRef, Quill } = useQuill({
        modules: { blotFormatter: {} }
    });

    if (Quill && !quill) {
        // const BlotFormatter = require('quill-blot-formatter');
        Quill.register('modules/blotFormatter', BlotFormatter);
    }

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldContents) => {
                console.log('Text change!');
                console.log(delta);

                let currrentContents = quill.getContents();
                console.log(currrentContents.diff(oldContents));
            });
        }
    }, [quill, Quill]);

    return (
        <div>
            {/* <div ref={quillRef} /> */}
            <Row gutter={[24, 0]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
                    <Card bordered={true}>
                        <PPT />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4} xl={10} className="mb-24">
                    <Card bordered={true}>
                        <ReactAudioPlayer
                            src={music}
                            controls
                        />
                    </Card>
                        <Card bordered={true}>
                            <div ref={quillRef} />
                        </Card>
                </Col>

            </Row>
        </div>
    );
};

export default PptPlayer;
