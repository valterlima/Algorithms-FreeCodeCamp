// Convert the given number into a roman numeral.

function convert(num){
	if (num >= 1000)
		return 'M' + convert(num-1000);
	else if (num >= 900)
		return 'CM' + convert(num-900);
	else if (num >= 500)
		return 'D' + convert(num-500);
	else if (num >= 400)
		return 'CD' + convert(num-400);
	else if (num >= 100)
		return 'C' + convert(num-100);
	else if (num >= 90)
		return 'XC' + convert(num-90);
	else if (num >= 50)
		return 'L' + convert(num-50);
	else if (num >= 40)
		return 'XL' + convert(num-40);
	else if (num >= 10)
		return 'X' + convert(num-10);
	else if (num == 9)
		return 'IX' + convert(num-10);
	else if (num >= 5 && num <= 8)
		return 'V' + convert(num-5);
	else if (num == 4)
		return 'IV' + convert(num-4);
	else if (num >= 1 && num <= 3)
		return 'I' + convert(num-1);
	else
		return '';
}

convert(2); // "II".
convert(3); // "III".
convert(4); // "IV".
convert(5); // "V".
convert(9); // "IX".
convert(12); // "XII".
convert(16); // "XVI".
convert(29); // "XXIX".
convert(44); // "XLIV".
convert(45); // "XLV"
convert(68); // "LXVIII"
convert(83); // "LXXXIII"
convert(97); // "XCVII"
convert(99); // "XCIX"
convert(500); // "D"
convert(501); // "DI"
convert(649); // "DCXLIX"
convert(798); // "DCCXCVIII"
convert(891); // "DCCCXCI"
convert(1000); // "M"
convert(1004); // "MIV"
convert(1006); // "MVI"
convert(1023); // "MXXIII"
convert(2014); // "MMXIV"
convert(3999); // "MMMCMXCIX"