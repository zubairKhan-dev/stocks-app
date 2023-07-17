/* dynamic graph component */
import { LineChart } from "react-native-chart-kit";
import theme from "../utils/theme";

function Graph(props: any) {

    // configuration for graph component
    const chartConfig = {
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => props.color,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        labelColor: (opacity = 1) => theme.BLACK,
    };
    
    return (
        <LineChart
            data={props.data} //data entering the graph
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
            style={{paddingRight: 0}}
            bezier
        />
    )
}

export default Graph