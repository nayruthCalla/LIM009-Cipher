describe("cipher", () => {
  it("debería ser un objeto", () => {
    assert.equal(typeof cipher, "object");
  });

  describe("cipher.encode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.encode, "function");
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33 (mayúsculas)', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    it('debería retornar "krod" para "hola" con offset 3 (minúsculas)', () => {
      assert.equal(cipher.encode(3, "hola"), "krod");
    });
    it('debería retornar "krod nurg" para "hola krod" con offset 3 (espacio)', () => {
      assert.equal(cipher.encode(3, "hola krod"), "krod nurg");
    });
    it('debería retornar "6" para "3" con offset 3 (números)', () => {
      assert.equal(cipher.encode(3, '3'), '6')
    });
    it('deberia retornar "$" para "!" con offset 3 (carácteres especiales)', () => {
      assert.equal(cipher.encode(3, '!'), '$')
    });
    it('deberia retornar "=" para ":" con offset 3 (otros carácteres especiales)', () => {
      assert.equal(cipher.encode(3, ':'), '=')
    });
    it('deberia retornar "ñ" para "Ñ ó ñ" con offset cualesquiera ', () => {
      assert.equal(cipher.encode(3, 'ñ'), 'ñ')
    });
    it('deberia retornar " Esta letra no esta en mi alfabeto :(" para " {" con offset cualesquiera ', () => {
      assert.equal(cipher.encode(3, '{'), ' Esta letra no esta en mi alfabeto :(')
    });

  });

  describe("cipher.decode", () => {
    it("debería ser una función", () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33 (mayúsculas)', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "hola" para "krod" con offset 3 (minúsculas)', () => {
      assert.equal(cipher.decode(3, "krod"), "hola");
    });
    it('debería retornar "elix hola" para "hola krod" con offset 3 (espacio)', () => {
      assert.equal(cipher.decode(3, "hola krod"), "elix hola");
    });
    it('debería retornar "3" para "6" con offset 3 (números)', () => {
      assert.equal(cipher.decode(3, '6'), '3')
    });
    it('deberia retornar "!" para "$" con offset 3 (carácteres especiales)', () => {
      assert.equal(cipher.decode(3, '$'), '!')
    });
    it('deberia retornar ":" para "=" con offset 3 (otros carácteres especiales)', () => {
      assert.equal(cipher.decode(3, '='), ':')
    });
    it('deberia retornar "ñ" para "Ñ ó ñ" con offset cualesquiera ', () => {
      assert.equal(cipher.decode(3, 'Ñ'), 'ñ')
    });
    it('deberia retornar " Esta letra no esta en mi alfabeto :(" para " {" con offset cualesquiera ', () => {
      assert.equal(cipher.decode(3, '{'), ' Esta letra no esta en mi alfabeto :(')
    });


  });

});
