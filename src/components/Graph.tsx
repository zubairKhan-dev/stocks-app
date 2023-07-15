import { LineChart } from "react-native-chart-kit";

const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => 'green',
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

function Graph(props: any) {
    return (
        <LineChart
            data={props.data}
            width={props.width}
            height={props.height}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            withHorizontalLabels= {props.horizontalLabels}
            withVerticalLabels= {props.verticalLabels}
            withDots= {false}
            withInnerLines= {false}
            withOuterLines= {false}
            fromZero= {true}
            style={{margin: 0, padding: 0}}
            bezier
        />
    )
}

export default Graph