module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order"
    // "stylelint-selector-bem-pattern"
  ],
  ignoreFiles: ["node_modules", "test", "dist", "**/*.js"],
  rules: {
    "no-descending-specificity": null,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "at-rule-no-unknown": null,
    "block-no-empty": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["blur"]
      }
    ],
    "property-no-unknown": [
      true,
      {
        ignoreProperties: [
          "placeholder-color",
          "gradient-start",
          "gradient-center",
          "gradient-end",
          "caret-color",
          "selected-color",
          "block-color",
          // text
          "lines",

          // swiper
          "indicator-color",
          "indicator-selected-color",
          "indicator-size",
          "indicator-top",
          "indicator-left",
          "indicator-right",
          "indicator-bottom",

          // progress
          "stroke-width",
          "layer-color",
          "start-angle",
          "total-angle",
          "center-x",
          "center-y",
          "radius",

          // picker
          "selected-color",
          "selected-font-size",

          // switch
          "thumb-color",
          "track-color",
        ]
      }
    ],
    "max-line-length": null,
    // "indentation": 2,
    // "no-empty-source": null,
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["selected-color", "block-color"]
      }
    ]
  }
}
