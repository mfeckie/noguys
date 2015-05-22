walk(document.body);

function walk(node)
{
	// The author of cloud-to-butt stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bguys\b/g, "people");
	v = v.replace(/\bGuys\b/g, "People");
	v = v.replace(/\bGUYS\b/g, "PEOPLE");
	v = v.replace(/\bhe.?\/?.she\b/g, "they");
	v = v.replace(/\bHe.?\/?.she\b/g, "They");
	v = v.replace(/\bHE.?\/?.SHE\b/g, "THEY");
	v = v.replace(/\bhe or she\b/g, "they");
	v = v.replace(/\bHe or she\b/g, "They");
	v = v.replace(/\bHE OR SHE\b/g, "THEY");
	v = v.replace(/\bhis.?\/?.her\b/g, "their");
	v = v.replace(/\bHis.?\/?.her\b/g, "Their");
	v = v.replace(/\bHIS.?\/?.HER\b/g, "THEIR");
	v = v.replace(/\bactress\b/gi, "actor");
	v = v.replace(/\bfire(woman|man)\b/gi, "firefighter");
	v = v.replace(/\bpolice(woman|man)\b/gi, "police officer");
	v = v.replace(/\bmanned\b/gi, "crewed");
	v = v.replace(/\bunmanned\b/gi, "uncrewed");



	textNode.nodeValue = v;
}
