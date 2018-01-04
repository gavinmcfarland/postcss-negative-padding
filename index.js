import postcss from 'postcss';
import valueParser from 'postcss-value-parser';

module.export = postcss.plugin('postcss-negative-padding', () => {
    // opts = opts || {};

    var padding = function (decl) {

        var values = postcss.list.space(decl.value);

        const properties = ['top', 'right', 'bottom', 'left'];

        if (decl.prop === 'padding') {

            if (values.length === 1) {
                values.push(values[0]);
            }
            if (values.length === 2) {
                values.push(values[0]);
            }
            if (values.length === 3) {
                values.push(values[1]);
            }

            properties.forEach((side, index) => {
                    const number = valueParser.unit(values[index]).number
                    const unit = valueParser.unit(values[index]).unit

                    // Create padding property for each side
                    decl.before({
                        prop:  `padding-${ side }`,
                        value: Math.abs(number) + unit
                    });
    		});

            properties.forEach((side, index) => {
                    const number = valueParser.unit(values[index]).number
                    // const unit = valueParser.unit(values[index]).unit
                    // const negative = number < 0 ? true : false;
                    const negative = number < 0;

                    // Create margin property for each side if value negative
                    if (negative) {
                        decl.before({
                            prop:  `margin-${ side }`,
                            value: values[index]
                        });
                    }
            });
        }
        else {
            const re = /(padding)-(top|right|bottom|left)/i;
            var side = decl.prop.match(re)[2];

            const number = valueParser.unit(decl.value).number;
            const unit = valueParser.unit(decl.value).unit;
            // const negative = number < 0 ? true : false;
            const negative = number < 0;

            decl.before({
                prop:  `padding-${ side }`,
                value: Math.abs(number) + unit
            });

            if (negative) {
                decl.before({
                    prop:  `margin-${ side }`,
                    value: decl.value
                });
            }
        }

        decl.remove();
    }

    return function (css) {

        const propertyMatch = new RegExp(`^(padding)`);

        css.walkDecls(propertyMatch, decl => {
  			padding(decl);
		});
    };
  });
