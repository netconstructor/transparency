// Generated by CoffeeScript 1.3.1
(function() {

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    require('./spec_helper');
    window.Transparency = require('../src/transparency');
  }

  describe("Transparency", function() {
    it("should ignore null context", function() {
      var data, expected, template;
      template = $('<div></div>');
      data = {
        hello: 'Hello'
      };
      expected = $('<div></div>');
      window.Transparency.render(template.find('#not_found')[0], data);
      return expect(template.html()).htmlToBeEqual(expected.html());
    });
    it("should render empty container for null data", function() {
      var data, expected, template;
      template = $("<div class=\"container\">\n  <div class=\"hello\"></div>\n  <div class=\"goodbye\"></div>\n</div>");
      data = null;
      expected = $("<div class=\"container\">\n</div>");
      template.render(data);
      expect(template.html()).htmlToBeEqual(expected.html());
      data = {
        hello: 'Hello'
      };
      expected = $("<div class=\"container\">\n  <div class=\"hello\">Hello</div>\n  <div class=\"goodbye\"></div>\n</div>");
      template.render(data);
      return expect(template.html()).htmlToBeEqual(expected.html());
    });
    it("should ignore null values", function() {
      var data, expected, template;
      template = $("<div class=\"container\">\n  <div class=\"hello\"></div>\n  <div class=\"goodbye\"></div>\n</div>");
      data = {
        hello: 'Hello',
        goodbye: null
      };
      expected = $("<div class=\"container\">\n  <div class=\"hello\">Hello</div>\n  <div class=\"goodbye\"></div>\n</div>");
      template.render(data);
      return expect(template.html()).htmlToBeEqual(expected.html());
    });
    it("should match model keys to template by element id, class, name attribute and data-bind attribute", function() {
      var data, expected, template;
      template = $("<div class=\"container\">\n  <div id=\"my-id\"></div>\n  <div class=\"my-class\"></div>\n  <div data-bind=\"my-data\"></div>\n</div>");
      data = {
        'my-id': 'id-data',
        'my-class': 'class-data',
        'my-data': 'data-bind'
      };
      expected = $("<div class=\"container\">\n  <div id=\"my-id\">id-data</div>\n  <div class=\"my-class\">class-data</div>\n  <div data-bind=\"my-data\">data-bind</div>\n</div>");
      template.render(data);
      return expect(template.html()).htmlToBeEqual(expected.html());
    });
    it("should handle nested templates", function() {
      var data, expected, template;
      template = $("<div class=\"container\">\n  <div class=\"greeting\">\n    <span class=\"name\"></span>\n    <div class=\"greeting\"></div>\n  </div>\n</div>");
      data = {
        greeting: 'Hello',
        name: 'World'
      };
      expected = $("<div class=\"container\">\n  <div class=\"greeting\">Hello<span class=\"name\">World</span>\n    <div class=\"greeting\">Hello</div>\n  </div>\n</div>");
      template.render(data);
      return expect(template.html()).htmlToBeEqual(expected.html());
    });
    it("should work with numeric values", function() {
      var data, expected, template;
      template = $("<div class=\"container\">\n  <div class=\"hello\"></div>\n  <div class=\"goodbye\"></div>\n</div>");
      data = {
        hello: 'Hello',
        goodbye: 5
      };
      expected = $("<div class=\"container\">\n  <div class=\"hello\">Hello</div>\n  <div class=\"goodbye\">5</div>\n</div>");
      template.render(data);
      return expect(template.html()).htmlToBeEqual(expected.html());
    });
    it("should work with date objects", function() {
      var data, expected, template;
      template = $("<div class=\"container\">\n  <div class=\"best_before\"></div>\n</div>");
      data = {
        best_before: new Date("2008-04-12")
      };
      expected = $("<div class=\"container\">\n  <div class=\"best_before\">2008-04-12T00:00:00.000Z</div>\n</div>");
      template.render(data);
      return expect(template.html()).htmlToBeEqual(expected.html());
    });
    it("should ignore functions in models", function() {
      var data, expected, template;
      template = $("<div class=\"container\">\n  <div class=\"hello\"></div>\n  <div class=\"goodbye\"></div>\n  <div class=\"skipped\"></div>\n</div>");
      data = {
        hello: 'Hello',
        goodbye: 5,
        skipped: function() {
          return "hello";
        }
      };
      expected = $("<div class=\"container\">\n  <div class=\"hello\">Hello</div>\n  <div class=\"goodbye\">5</div>\n  <div class=\"skipped\"></div>\n</div>");
      template.render(data);
      return expect(template.html()).htmlToBeEqual(expected.html());
    });
    return it("should preserve text between template elements", function() {
      var data, expected, template;
      template = $("<li class=\"foo\">\n<span data-bind=\"begin\"></span> - <span data-bind=\"end\"></span>\n</li>");
      data = {
        begin: 'asdf',
        end: 'fdsa'
      };
      expected = $("<li class=\"foo\">\n<span data-bind=\"begin\">asdf</span> - <span data-bind=\"end\">fdsa</span>\n</li>");
      template.render(data);
      return expect(template.html()).htmlToBeEqual(expected.html());
    });
  });

}).call(this);
