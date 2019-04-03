import _regeneratorRuntime from "babel-runtime/regenerator";

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(foo);

function foo() {
	var x, y, z;
	return _regeneratorRuntime.wrap(function foo$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					x = 10;
					y = 20;


					console.info(x, y);

					_context.next = 5;
					return;

				case 5:
					z = x + y;

					console.info(z);

				case 7:
				case "end":
					return _context.stop();
			}
		}
	}, _marked, this);
}