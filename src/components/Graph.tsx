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
            width={256}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            withHorizontalLabels= {props.horizontalLabels}
            withVerticalLabels= {props.verticalLabels}
            withDots= {false}
            withInnerLines= {false}
            withOuterLines= {false}
            bezier
        />
    )
}

export default Graph