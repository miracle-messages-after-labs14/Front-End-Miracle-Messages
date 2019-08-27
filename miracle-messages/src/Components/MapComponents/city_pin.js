import React, { PureComponent } from "react";
import { connect } from "react-redux";

import WebMercatorViewport from "viewport-mercator-project";
import { LinearInterpolator } from "react-map-gl";

// Action imports
import { updatePopupAction } from "../../Actions/updatePopupAction";
import { slideToggleAction } from "../../Actions/SlideToggleAction";
import { onViewportChanged } from "../../Actions/OnViewportAction";

const pinStyle = {
  fill: "black"
};

class CityPin extends PureComponent {
  render() {
    const PinClickHandler = () => {
      this.props.updatePopupAction(this.props.city);
      this.props.slideToggleAction();
    };
    const size = 28;

    return (
      <svg
        height={size}
        viewBox="0 0 30 30"
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`
        }}
        onClick={PinClickHandler}
      >
        <path
          d="m7.2985 27.422c-8.6766-5.2905-8.3148-19.878.60757-24.492 3.8345-1.9829 10.353-1.9829 14.188 0 8.9223 4.6139 9.2842 19.201.60757 24.492-4.1937 2.5571-11.209 2.5571-15.403 0zm14.662-.67602c8.0999-4.7847 8.0999-17.944 0-22.729-3.5512-2.0978-10.369-2.0978-13.92 0-8.0191 4.737-8.1149 17.748-.16703 22.681 3.3974 2.1085 10.558 2.133 14.087.04817zm-13.96-7.9235c0-2.118-.40488-3.3088-1-2.941-2.5221 1.5587-.57546-1.5002 3.5-5.5l4.5-4.4164 4.5 4.4164c4.0755 3.9998 6.0221 7.0587 3.5 5.5-.59512-.3678-1 .82295-1 2.941v3.559h-14zm13-.44098c0-3.5728-.61478-3.7105-3.6855-.82569l-2.3145 2.1743-2.3145-2.1743c-3.0708-2.8848-3.6855-2.7471-3.6855.82569v3h12zm-3.8287-1.655c2.7714-2.5081 2.2282-3.345-2.1713-3.345-4.4271 0-4.7814.47912-2.345 3.1713 2.0238 2.2362 2.2285 2.2441 4.5163.17375zm.05096-6.5672-2.2222-2.2222-4.4444 4.4444h8.8889z"
          fill="#ccc"
        />
        <g stroke-width=".12712">
          <path d="m13.146 29.2c-3.391-.3779-5.9685-1.5272-8.0582-3.5931-2.4752-2.447-3.821-5.7017-3.9801-9.6255-.17819-4.3942 1.1736-8.1128 3.9496-10.865 1.1862-1.1758 2.1531-1.8453 3.5177-2.4352 3.8497-1.6644 9.8016-1.5549 13.404.24643 3.4989 1.7497 6.0135 5.3927 6.746 9.7734.31198 1.8658.20213 4.8005-.24349 6.5052-1.0158 3.8857-3.4368 7.0391-6.6296 8.635-2.2028 1.101-5.8747 1.674-8.7057 1.3585zm4.1295-1.0192c2.5301-.31006 4.3774-1.0356 6.0723-2.3849 1.9415-1.5456 3.5347-4.0544 4.2506-6.6933.31967-1.1784.34378-1.4437.34058-3.747-.0038-2.751-.12238-3.4149-.98962-5.5421-.87901-2.156-2.8819-4.5562-4.7467-5.6882-2.8467-1.728-7.4792-2.1965-11.538-1.1668-1.9954.50617-3.6774 1.5097-5.1507 3.0729-1.4903 1.5813-2.5389 3.4955-3.1434 5.7386-.30219 1.1212-.33253 1.4484-.33253 3.5855 0 2.1296.031007 2.4666.32827 3.5687.69529 2.5776 1.7386 4.449 3.3966 6.0924 1.5769 1.563 2.9541 2.3421 5.0297 2.8452 1.8612.45113 4.3893.5755 6.4831.31892z" />
          <path d="m8.0586 20.218c-.0009627-2.7838-.23418-4.2216-.71466-4.406-.10101-.03876-.39524.04294-.65385.18154-.55537.29766-.79177.31915-.79177.07199 0-.33545 1.2421-2.038 2.5118-3.4429 1.4047-1.5543 6.4477-6.5466 6.6131-6.5466.19484 0 6.9683 6.9166 7.7756 7.9399.83895 1.0634 1.3875 2.0348 1.2351 2.1872-.04968.04968-.35339-.03749-.67492-.1937-.53876-.26175-.60226-.26803-.8099-.08012-.39437.3569-.52585 1.2038-.59673 3.8437l-.06911 2.5742h-13.824l-.0007373-2.1292zm12.941-1.3347c-.0517-2.7488-.14658-3.216-.68042-3.35-.57602-.14457-1.045.20594-4.5468 3.3983l-.78506.71568-1.7797-1.6431c-2.5303-2.3362-3.2774-2.7962-3.759-2.3145-.36098.36098-.49946 1.3835-.49946 3.6877v2.0801h12.099zm-4.9776-1.1557c.95016-.7039 2.4054-2.1497 2.6608-2.6436.49157-.9506-.0359-1.4337-1.8051-1.6533-1.2721-.15791-4.3006-.06964-5.0428.14699-1.0872.31734-.90585 1.0552.70818 2.881 1.794 2.0294 2.2353 2.1903 3.479 1.269zm3.3508-5.3896c0-.14396-4.238-4.3552-4.3828-4.3552-.14681 0-4.3884 4.2068-4.3884 4.3524 0 .05321 1.9735.09674 4.3856.09674s4.3856-.04229 4.3856-.09398z" />
          <path d="m8.0593 20.102c0-2.4357-.15474-3.7047-.50442-4.1366-.21867-.27004-.23456-.27128-.78524-.06097-.68509.26164-.74423.26398-.74423.02942 0-.48298 2.1688-3.0141 5.2698-6.1502 1.8209-1.8415 3.4236-3.4091 3.5616-3.4837.22306-.12049.64907.26897 3.8333 3.5045 3.3402 3.394 4.5507 4.7657 5.0915 5.7694.28377.52668.15072.64499-.41953.37306-1.068-.5093-1.2939.06029-1.45 3.656-.06401 1.4748-.1181 2.6957-.12021 2.7132-.0021.01748-3.0928.03178-6.8682.03178h-6.8644zm13.018-.32821c-.10735-3.1925-.14922-3.6537-.36098-3.9769-.4768-.72768-1.1431-.36876-3.8764 2.088l-1.8337 1.6482-.46359-.404c-.25497-.2222-1.1408-1.0159-1.9686-1.7637-1.6659-1.5051-2.386-1.9651-2.8813-1.8408-.57421.14412-.66544.57104-.71788 3.3594l-.048412 2.5742h12.207zm-5.2489-1.8571c.72036-.45684 2.1996-1.8304 2.6752-2.484.41496-.5703.47377-1.2093.13827-1.5024-.51761-.45211-1.1793-.54425-3.9089-.54425-2.7746 0-3.2176.07321-3.5345.58414-.27759.44753.2815 1.4292 1.665 2.9236 1.3829 1.4936 1.9268 1.6813 2.965 1.0229zm3.5444-5.6335c0-.20467-4.1646-4.2996-4.3727-4.2996-.20961 0-4.3985 4.0935-4.3985 4.2983 0 .11346 1.0867.15084 4.3856.15084 3.2781 0 4.3856-.03777 4.3856-.14958z" />
        </g>
        <g fill="#f2f2f2" stroke-width=".12712">
          <path d="m11.809 27.998c-.55932-.10383-1.3888-.30923-1.8432-.45645-3.859-1.2502-6.8457-4.9264-7.6989-9.4762-.29179-1.5561-.19496-4.901.18147-6.2685 1.2516-4.5468 4.3665-7.8085 8.4073-8.8037 2.2205-.54686 5.6681-.61596 7.7542-.15542 2.2943.50649 4.1394 1.5281 5.6692 3.139 1.545 1.6269 2.4995 3.282 3.1887 5.5298.32396 1.0564.34283 1.2605.35028 3.7861.0094 3.1819-.15292 3.9825-1.2627 6.2288-1.7102 3.4615-4.3055 5.572-7.8184 6.3578-1.3557.30327-5.5468.37509-6.928.11871zm10.244-8.3198c.07469-2.7246.2-3.4878.61474-3.7441.07896-.0488.40369.03719.72161.19109.77932.37726.93957.21083.54933-.57054-.16104-.32245-.66613-1.0567-1.1224-1.6318-.82693-1.0421-6.8985-7.2771-7.5225-7.7249l-.32836-.23567-2.7225 2.6445c-3.0134 2.927-4.8275 4.9037-5.7416 6.2563-.67142.9935-.80284 1.5886-.3178 1.4389.15731-.04853.44049-.16679.62928-.2628.50614-.25741.60194-.22266.83288.30212.16751.38064.21873 1.0146.25423 3.1462.024447 1.4682.068529 2.7415.097959 2.8295.042313.12651 1.5107.15311 7.0168.12712l6.9633-.03287z" />
          <path d="m9.0966 18.814c.036924-2.1472.07635-2.5669.26866-2.8602.13983-.21321.33961-.34368.52627-.34368.41068 0 1.4863.81709 3.4001 2.5829.88517.8167 1.6482 1.4849 1.6957 1.4849.04744 0 .85839-.69978 1.8021-1.5551 2.1972-1.9913 2.8933-2.5127 3.3545-2.5127.61523 0 .6849.29892.73328 3.1462l.04374 2.5742h-11.868z" />
          <path d="m13.995 17.803c-.58105-.43644-1.9231-1.9435-2.3994-2.6944-.47836-.75416-.46511-1.0862.05467-1.3702.35948-.19641.76808-.22572 3.1462-.22572 2.5453 0 2.7745.01916 3.3369.27887.55538.2565.60381.31524.60381.73232 0 .39176-.13405.5944-.98517 1.4893-.54184.56969-1.3204 1.2841-1.7301 1.5876-.89799.66518-1.3504.71032-2.0269.20221z" />
          <path d="m12.763 10.208c1.152-1.1536 2.1531-2.0975 2.2246-2.0975.07151 0 1.0726.94386 2.2246 2.0975l2.0946 2.0975h-8.6383z" />
        </g>
      </svg>
    );
  }
}

const mapStateToProps = state => {
  return {
    popupInfo: state.mapReducer.popupInfo
  };
};

export default connect(
  mapStateToProps,
  { updatePopupAction, slideToggleAction, onViewportChanged }
)(CityPin);
