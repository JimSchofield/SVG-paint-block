// the element that click handling occurs on
import SVGCanvas from './components/SVGCanvas';

// The function that turns an array of points into
// the path syntax for svg
import getSVGPath from './getSVGPath';

const { registerBlockType } = wp.blocks;

const { RichText, InspectorControls, ColorPalette } = wp.editor;

registerBlockType('svg-paint-block/block', {
    title: 'SVG Paint Block',
    icon: 'admin-customizer',
    category: 'common',

    attributes: {
        backgroundColor: {
            type: String,
            default: 'blue',
        },
        strokeList: {
            type: Array,
            default: [],
        },
    },

    edit(props) {
        const { className, setAttributes } = props;
        const { backgroundColorStroke, strokeList } = props.attributes;

        function addStroke(stroke) {
            setAttributes({
                strokeList: [...strokeList, stroke],
            });
        }

        // For the editing block, we simply render the "canvas"- the layer
        // that takes all the user mouse clicks and records strokes
        return (
            <div className={className}>
                <SVGCanvas addStroke={addStroke} strokeList={strokeList} />
            </div>
        );
    },

    save(props) {
        const { className } = props;
        const { backgroundColor, strokeList } = props.attributes;

        // Here, we dispense with the 'canvas' layer and just render out the svg.
        // The strength here is that we don't have to run and javascript on the page
        return (
            <div
                style={{
                    width: '300px',
                    height: '300px',
                }}
            >
                <svg
                    viewBox="0 0 300 300"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        width: '100%',
                        height: '100%',
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '10',
                    }}
                >
                    {strokeList.length > 0 &&
                        strokeList.map(stroke => {
                            return <path d={getSVGPath(stroke)} />;
                        })}
                </svg>
            </div>
        );
    },
});
