"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoModal;
var _react = _interopRequireDefault(require("react"));
var _propTypes = require("prop-types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function InfoModal(_ref) {
  var setIsModalOpen = _ref.setIsModalOpen,
    title = _ref.title,
    information = _ref.information,
    modalBg = _ref.modalBg,
    TitleTextAlign = _ref.TitleTextAlign,
    TitleTextColor = _ref.TitleTextColor,
    InformationTextAlign = _ref.InformationTextAlign,
    InformationTextColor = _ref.InformationTextColor,
    ValidationBtnBgColor = _ref.ValidationBtnBgColor,
    ValidationBtnColor = _ref.ValidationBtnColor;
  var stylesBg = {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    zIndex: '5',
    top: '50%',
    left: '50%',
    background: 'rgba(0, 0, 0, 0.2)',
    transform: 'translate(-50%, -50%)'
  };
  var stylesPosition = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };
  var stylesContainer = {
    width: '25vw',
    minWidth: '200px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    background: modalBg,
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.193)',
    zIndex: '10'
  };
  var stylesCloseBtn = {
    position: 'absolute',
    top: '-7%',
    right: '-3%',
    fontSize: '1rem',
    fontWeight: '500',
    color: 'rgb(255, 255, 255, 1)',
    borderRadius: '50%',
    border: '1px solid black',
    padding: '4px 9px',
    background: 'rgb(0, 0, 0, 1)',
    cursor: 'pointer'
  };
  var stylesContent = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: '10px'
  };
  var stylesTitle = {
    textAlign: TitleTextAlign,
    padding: '15px 15px 0px 15px',
    color: TitleTextColor,
    fontSize: '1.3rem',
    fontWeight: '500'
  };
  var stylesInformation = {
    textAlign: InformationTextAlign,
    padding: '0px 15px 15px 15px',
    color: InformationTextColor,
    fontSize: '1.3rem',
    fontWeight: '500'
  };
  var stylesConfirmationBtn = {
    width: '100%',
    fontSize: '1.1rem',
    fontWeight: '700',
    color: ValidationBtnColor,
    border: 'none',
    padding: '10px 30px',
    borderTop: "2px solid ".concat(ValidationBtnColor),
    borderRadius: '0px 0px 10px 10px',
    background: ValidationBtnBgColor,
    cursor: 'pointer'
  };
  var handleValidationBtnMouseEnter = function handleValidationBtnMouseEnter(e) {
    e.target.style.background = 'rgb(180, 180, 180, 0.40)';
  };
  var handleValidationBtnMouseLeave = function handleValidationBtnMouseLeave(e) {
    e.target.style.background = ValidationBtnBgColor;
  };
  var handleCloseBtnMouseEnter = function handleCloseBtnMouseEnter(e) {
    e.target.style.background = 'rgb(255, 255, 255, 1)';
    // e.target.style.background = modalBg
    e.target.style.color = 'rgb(0, 0, 0, 1)';
  };
  var handleCloseBtnMouseLeave = function handleCloseBtnMouseLeave(e) {
    e.target.style.background = 'rgb(0, 0, 0, 1)';
    e.target.style.color = 'rgb(255, 255, 255, 1)';
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: stylesBg
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: stylesPosition
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: stylesContainer
  }, /*#__PURE__*/_react.default.createElement("button", {
    onMouseEnter: handleCloseBtnMouseEnter,
    onMouseLeave: handleCloseBtnMouseLeave,
    style: stylesCloseBtn,
    onClick: function onClick() {
      setIsModalOpen(false);
    }
  }, "X"), /*#__PURE__*/_react.default.createElement("div", {
    style: stylesContent
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: stylesTitle
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    style: stylesInformation
  }, information)), /*#__PURE__*/_react.default.createElement("button", {
    onMouseEnter: handleValidationBtnMouseEnter,
    onMouseLeave: handleValidationBtnMouseLeave,
    style: stylesConfirmationBtn,
    type: "button",
    onClick: function onClick() {
      setIsModalOpen(false);
    }
  }, "OK"))));
}
InfoModal.propTypes = {
  title: _propTypes.PropTypes.string,
  information: _propTypes.PropTypes.string,
  modalBg: _propTypes.PropTypes.string,
  hoverCloseBtn: _propTypes.PropTypes.string,
  TitleTextAlign: _propTypes.PropTypes.string,
  TitleTextColor: _propTypes.PropTypes.string,
  InformationTextAlign: _propTypes.PropTypes.string,
  InformationTextColor: _propTypes.PropTypes.string,
  ValidationBtnColor: _propTypes.PropTypes.string,
  borderConfirmBtn: _propTypes.PropTypes.string,
  hoverConfirmBtn: _propTypes.PropTypes.string
};
InfoModal.defaultProps = {
  title: 'MODAL TITLE',
  information: 'MODAL INFO',
  modalBg: 'white',
  hoverCloseBtn: 'rgb(245, 198, 39, 1)',
  TitleTextAlign: 'left',
  TitleTextColor: 'black',
  InformationTextAlign: 'left',
  InformationTextColor: 'black',
  ValidationBtnColor: 'black',
  ValidationBtnBgColor: 'transparent',
  borderConfirmBtn: '2px solid black',
  hoverConfirmBtn: 'rgb(180, 180, 180, 0.40)'
};