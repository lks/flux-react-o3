/**
 * Created by j.calabrese on 8/19/15.
 */
jest.dontMock('../js/utils/firebase-utils');


describe('firebase-utils', function () {
  it('convert object with 4 objects to array with 4 items', function () {
    var FirebaseUtils = require('../js/utils/firebase-utils');
    //var jsonObject = "{'10923': {name: 'Domaine Rapet', year: '2012'}, '10984': {name: 'Domaine Calab', year: '2009'}, '10981': {name: 'Domaine Debroeck', year: '2003'}}";
    var jsonObject = '{"-Jx43VqHjUsCbfOgDX3N":{"domain":"sdfsdfsdf","number":"9","text":"","type":"red","year":"2011"},"-Jx46poh2t9oopdC6GuX":{"domain":"Domaine Rapet","number":"8","text":"","type":"red","year":"2018"},"-Jx47e0wDMpeLZ12Sfra":{"domain":"fsdfdf","number":"67","text":"fdsfsdfsdf","type":"red","year":"2011"},"-Jx47u11tsrUncrCVl68":{"domain":"Domaine Beaune","number":"12","text":"REST","type":"red","year":"2017"}}';
    var listObjects = JSON.parse(jsonObject);
    var result = [
      {"domain":"sdfsdfsdf","number":"9","text":"","type":"red","year":"2011"},
      {"domain":"Domaine Rapet","number":"8","text":"","type":"red","year":"2018"},
      {"domain":"fsdfdf","number":"67","text":"fdsfsdfsdf","type":"red","year":"2011"},
      {"domain":"Domaine Beaune","number":"12","text":"REST","type":"red","year":"2017"}
    ];
    var expected = FirebaseUtils.convertToArray(listObjects);

    expect(expected.length).toBe(result.length);

    expect(expected[0].domain).toBe(result[0].domain);
    expect(expected[0].number).toBe(result[0].number);

    expect(expected[2].domain).toBe(result[2].domain);
    expect(expected[2].number).toBe(result[2].number);
  });
});