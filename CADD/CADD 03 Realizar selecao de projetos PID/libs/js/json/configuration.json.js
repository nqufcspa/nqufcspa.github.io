Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CADD] 03 Realizar seleção de projetos PID","publishDate":"09/04/2021 16:18:56","pages":[{"id":"83e93c5d-641c-4859-b9f8-89ce4f1caa5c","name":"[CADD] 03 Realizar seleção de projetos PID","version":"1.0","author":"ritas","image":"files\\diagrams\\CADD]_03_Realizar_selecao_de_projetos_PID.png","isSubprocessPage":false,"elements":[{"id":"959619d9-ea80-413e-832c-8a5e187a0fa7","name":"[CADD] 03 Realizar seleção de projetos PID","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1886.5,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"460b8609-0a41-4e33-bab3-9841e1423dc3","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":114.0,"y":74.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"62071edb-bfe5-4a04-b154-c1cac0c5f085","name":"Abrir processo de seleção de projetos PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":263.0,"y":54.0}],"radius":0.0,"height":70.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1b43882d-fb2f-4514-bdd2-5990ec7a4e6f","name":"Incluir documento 917 - Edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":434.0,"y":59.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1b0a0c43-ec1a-42f9-8ccb-075126ef0f3a","name":"Publicar edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":562.0,"y":57.0}],"radius":0.0,"height":65.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7bdb6728-1c9b-48da-8003-941d8c8d6367","name":"Solicitar publicação de notícia sobre lançamento de edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":716.0,"y":54.0}],"radius":0.0,"height":71.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"716bd9c0-03e4-46b9-8a19-4c20cbd1059c","name":"Necessidade de retificação? ","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":752.0,"y":212.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ed884ef9-aa71-4995-b287-155e0d39e8b2","name":"Incluir documento 198 - Retificação edital","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":717.0,"y":304.5}],"radius":0.0,"height":73.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a20cfab9-8c65-42a6-9de2-8cdc04271ed8","name":"Publicar retificação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":504.0,"y":311.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f8c6ce4c-4d11-4237-9719-1cf78f6793d0","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":206.0,"y":321.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"b307d805-2f81-41c7-95fd-345b85c0f7de","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":206.0,"y":424.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"78a84cf2-a03c-4e55-aa9e-46255286c3cd","name":"Aguardar fim de prazo para cadastramento de propostas","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":363.0,"y":895.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"d4a0905d-8977-406b-bc36-552ab509882c","name":"[CADD] 03-01 Submeter projetos de PID","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":181.0,"y":1569.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[CADD] 03-01 Submeter projetos de PID - [CADD] 03-01 Submeter projetos de PID","type":"url","pageRef":"7765eab5-5654-4427-80ed-554c2dd991b3","processPageRef":"f4c242c3-92aa-4584-997e-c96515650dca"}]},{"id":"387b959b-e20f-463d-bcc7-76552b64b439","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":358.0,"y":1099.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"2b0e4461-f4dd-4f20-96e7-f442192d80f9","name":"Enviar PDF dos formulários dos projetos homologados para os avaliadores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":472.5,"y":1073.0}],"radius":0.0,"height":92.0,"width":129.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8098603e-f788-4bfc-81ee-64d9f8196f60","name":"Avaliar projetos recebidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":491.0,"y":1334.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"99f73766-b6a9-4d87-85ef-cec38481076e","name":"Enviar avaliação dos projetos para a CADD","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":779.5,"y":1328.0}],"radius":0.0,"height":72.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ccf78fb6-cb7a-4daa-8975-0baa3b0513fb","name":"Incluir documento 201 - Resultado seleção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":774.0,"y":944.0}],"radius":0.0,"height":79.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2192cac5-6211-46df-ac4d-b421e0266568","name":"Publicar resultado ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":787.0,"y":620.0}],"radius":0.0,"height":61.0,"width":91.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8f9b7e6a-8e38-49ff-9a84-830ba5a8cb0f","name":"Enviar resultado para publicação de notícia","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":780.5,"y":493.0}],"radius":0.0,"height":72.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4fb16b55-aa58-4185-95a4-bf410a555169","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":924.0,"y":897.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"db160289-5592-45f0-9c36-261ee2261ea5","name":"Aguardar o fim do prazo de inscrições nas bolsas","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1006.0,"y":902.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"3631e7b6-de49-4687-ba98-9b9b1cf31688","name":"[CADD] 03-02 Selecionar bolsistas PID","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":899.0,"y":1568.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[CADD] 03-02 Selecionar bolsistas PID - [CADD] 03-02 Selecionar bolsistas PID","type":"url","pageRef":"c1fc68b2-1c13-4d9e-8c94-334df87a6169","processPageRef":"02708678-0926-4488-bcb3-38ed9aa04194"}]},{"id":"2cdc0a70-2421-45bd-ab7d-3738a4e10703","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1001.0,"y":1028.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"edbaeeef-fb5e-4b7a-a655-61d7c23b7291","name":"Incluir documento 201 - Resultado seleção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1094.5,"y":792.0}],"radius":0.0,"height":70.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0c587021-62c8-4cff-94eb-7f2e08df05e6","name":"Publicar resultado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1100.0,"y":939.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d3fdc067-235b-417f-a908-674e33a4853a","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1125.0,"y":1085.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"61fbfbc7-0d85-48d1-bf5b-d116328c03d7","name":"Aguardar prazo de entrega dos relatórios parciais","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1258.0,"y":1090.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"2b490e08-7578-4d9e-8fd7-fa09d10159f5","name":"[CADD] 01 Entregar relatório parcial do PID","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1100.0,"y":1578.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/CADD/CADD%2001%20Entregar%20relat%C3%B3rio%20parcial%20do%20PID/#list","type":"url"}},{"id":"58e7387d-e3ae-4e47-8b2b-a5a5ae4ab8dd","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1253.0,"y":1177.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"ba05762e-b25b-486a-9617-dbe10e33c320","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1384.0,"y":1177.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"560c7145-6c03-4359-a841-111f9868041b","name":"Aguardar prazo de entrega dos relatórios finais","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1389.0,"y":1092.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"b4adecde-2cbf-4e70-85f7-181f8cb99a56","name":"[CADD] 04 Entregar relatório final do PID","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1359.0,"y":1585.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/CADD/CADD%2004%20Entregar%20relat%C3%B3rio%20final%20do%20PID/#list","type":"url"}},{"id":"f6b17ae1-1544-475b-bbb6-124e5cac4716","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1472.0,"y":1087.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"976ac3f1-43ef-479e-82d9-f9b0ac0dadae","name":"Incluir documento 146 - Certificado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1602.0,"y":1070.5}],"radius":0.0,"height":75.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"368dbf76-fc30-4410-8734-374b6724621b","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1609.0,"y":1780.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"566caafc-40d4-4f99-8abf-74adfc45347e","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1744.0,"y":1795.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"52c55dbc-fc0d-41d5-a6de-f5de2752b3c8","name":"PROGRAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":736.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"3265a305-a526-4e02-a467-fb4b0fda3638","name":"CADD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":756.0}],"radius":0.0,"height":515.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b9273b7a-27c3-4f6b-b440-db4fb41cd5f7","name":"Avaliadores","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1271.0}],"radius":0.0,"height":234.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f6242834-a16c-44f1-8fc7-b28fd2965e33","name":"Orientador responsável pelo projeto","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1505.0}],"radius":0.0,"height":212.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"318921a2-3a7a-4427-b9ee-75628346d3e4","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1717.0}],"radius":0.0,"height":189.5,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"7765eab5-5654-4427-80ed-554c2dd991b3","name":"[CADD] 03-01 Submeter projetos de PID","version":"1.0","author":"ariel","image":"files\\diagrams\\CADD]_03_01_Submeter_projetos_de_PID.png","isSubprocessPage":false,"elements":[{"id":"f4c242c3-92aa-4584-997e-c96515650dca","name":"[CADD] 03-01 Submeter projetos de PID","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1854.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"6bf87465-7663-4f69-8f51-3fbc54766a37","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":159.0,"y":124.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"57148e96-cd58-47a9-b04a-62849e68a930","name":"Abrir processo de submissão de projeto de iniciação à docência (PID)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":253.0,"y":97.0}],"radius":0.0,"height":85.0,"width":126.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"454db5e9-324e-447b-82d3-7e9c45cb9e3b","name":"Incluir documento  299 - Formulário de submissão de projeto PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":469.0,"y":99.0}],"radius":0.0,"height":81.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9915982f-3def-4b04-a649-5a7384a427e3","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":507.0,"y":247.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"c36b6f9d-36c7-4eab-bcf7-4b527e1bdcd5","name":"Orientador responsável é o responsável pela disciplina na qual o projeto será desenvolvido?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":786.0,"y":247.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"9dfacc1c-a939-43ac-b4d0-9c0d7493664d","name":"Assinar formulário","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":791.0,"y":555.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"633b1bdd-1752-448b-b4af-db58e7d38e72","name":"Assinar formulário","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":512.0,"y":985.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"b9e70cef-a79a-46ca-85bf-12f4331ac9db","name":"Assinar formulário","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":393.0,"y":1188.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"31cba67a-265d-4778-83e7-3f9f6c84f676","name":"Assinar formulário","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":640.0,"y":773.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"c95ca5d5-6ccf-4887-acd9-06f909fc8ed5","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":936.0,"y":247.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"9f9afb42-a394-4c5b-a375-3ae8d66cd214","name":"Relacionar processo ao processo de seleção de projetos PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":641.0,"y":1336.0}],"radius":0.0,"height":80.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8d14e734-f6d3-4c2d-8c4e-d1b07854794f","name":"Analisar documentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":482.0,"y":1346.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d28c95ee-0cda-4afb-a9fd-386d2ef1785c","name":"Projeto homologado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":628.0,"y":1471.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"c556629b-a77f-40d2-a8c2-82aae02319b9","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":784.0,"y":1457.5}],"radius":0.0,"height":68.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6c44732d-676d-4515-89ba-94151e283a21","name":"Salvar em PDF formulário de inscrição de projeto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":945.0,"y":1455.0}],"radius":0.0,"height":73.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"42d20af6-8050-4351-a496-10640d514bcf","name":"Enviar este processo para a unidade do orientador responsável","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1136.5,"y":1444.0}],"radius":0.0,"height":95.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"aedb7d85-270c-4d9c-b7b7-82aa62b53d58","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1331.0,"y":1476.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"3bb3a167-b0b9-4d1c-a9ef-f6a80d981a8a","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":590.0,"y":1584.0}],"radius":0.0,"height":73.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ce932287-634c-42fe-b3d3-d014e3e6908a","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1030.0,"y":1769.0}],"radius":0.0,"height":62.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4ff0a348-df9f-4f6b-9075-d2c72b5341cc","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1190.0,"y":1785.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"ac553f0c-82a9-48bc-9d3f-d3794f8bba49","name":"Orientador responsável pelo projeto","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":431.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c41fa0c4-01ab-4c33-b5d8-5c492caf33da","name":"Professor responsável pela disciplina na qual o projeto será desenvolvido","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":451.0}],"radius":0.0,"height":247.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0b3aa6d3-7966-4199-b8c3-cd65c99df306","name":"Coordenador do Curso no qual o projeto será desenvolvido","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":698.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"cb9f50e2-48f6-48e0-9a39-830fa32dd6f1","name":"Professor(es) orientador(es) do projeto","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":898.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6cb1b012-7bd1-4fae-b9e4-4e72dc98bc88","name":"Chefe de Departamento do orientador responsável","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1098.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7ecafb10-3b63-4297-907d-5ed0ab37c0cc","name":"CADD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1298.0}],"radius":0.0,"height":411.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c64595ac-68cf-4834-a6f4-be9322de2c35","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1709.0}],"radius":0.0,"height":165.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"c1fc68b2-1c13-4d9e-8c94-334df87a6169","name":"[CADD] 03-02 Selecionar bolsistas PID","version":"1.0","author":"ariel","image":"files\\diagrams\\CADD]_03_02_Selecionar_bolsistas_PID.png","isSubprocessPage":false,"elements":[{"id":"02708678-0926-4488-bcb3-38ed9aa04194","name":"[CADD] 03-02 Selecionar bolsistas PID","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":21.0}],"radius":0.0,"height":720.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"9c886871-0f39-4206-8802-3c8e35551733","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":131.0,"y":74.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"3f0d89fb-ddc5-46e4-a3c1-01c433a0a1fe","name":"Dar continuidade ao processo de submissão de projeto PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":195.0,"y":49.5}],"radius":0.0,"height":81.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9f9e739e-8c1f-47d0-b061-d8e9368bb505","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":342.0,"y":69.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"e612b19d-8657-41ff-8fcd-76be480e6287","name":"Realizar inscrição no projeto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":317.0,"y":302.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"109af122-0a11-4bc9-b04a-3aca6f67e32d","name":"Aguardar prazo final de inscrições dos alunos","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":420.0,"y":74.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"6984cffe-038a-4ede-b0fb-a5ee101bb21f","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":498.0,"y":69.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"b38e237b-c4a8-4cfd-93bf-f5e1b265b8fc","name":"Selecionar bolsistas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":580.5,"y":59.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ee099da5-88c0-41ea-84b4-d4f0ee523085","name":"Incluir documento 301 - Ata de seleção bolsistas PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":575.0,"y":156.0}],"radius":0.0,"height":74.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bb2c5f87-ee36-435b-b142-2707dc39c4bf","name":"Incluir documento 302 - Termo de compromisso bolsista PID","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":726.0,"y":148.0}],"radius":0.0,"height":90.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"94d35410-df69-45dc-98f4-38f26d9ae0f9","name":"Assinar termo de compromisso","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":941.0,"y":360.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"b238f76c-825d-440e-8730-64be9eaec9d6","name":"Incluir nome do aluno na lista de bolsistas selecionados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":902.0,"y":511.0}],"radius":0.0,"height":73.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ebc92e2b-1c5c-4fb5-a54d-815f5bf6d734","name":"Enviar este processo para a Divisão de Arquivo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":907.0,"y":619.0}],"radius":0.0,"height":73.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5ab425fc-1708-4d43-a738-fb1949a7087e","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1063.0,"y":640.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"b85ef5ed-0f77-4ed8-811f-1990b75ddae7","name":"Orientador responsável pelo projeto","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":21.0}],"radius":0.0,"height":244.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e9068a4b-7b38-4909-b3d2-9c1730b98e2f","name":"Aluno","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":265.0}],"radius":0.0,"height":216.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f1b65697-bec1-440b-9103-e876e7a5ea75","name":"CADD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":481.0}],"radius":0.0,"height":260.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"7765eab5-5654-4427-80ed-554c2dd991b3","containerName":"[CADD] 03-01 Submeter projetos de PID","isSubprocess":false,"elements":[{"id":"f4c242c3-92aa-4584-997e-c96515650dca","value":"[CADD] 03-01 Submeter projetos de PID"},{"id":"ac553f0c-82a9-48bc-9d3f-d3794f8bba49","value":"Orientador responsável pelo projeto"},{"id":"c41fa0c4-01ab-4c33-b5d8-5c492caf33da","value":"Professor responsável pela disciplina na qual o projeto será desenvolvido"},{"id":"0b3aa6d3-7966-4199-b8c3-cd65c99df306","value":"Coordenador do Curso no qual o projeto será desenvolvido"},{"id":"cb9f50e2-48f6-48e0-9a39-830fa32dd6f1","value":"Professor(es) orientador(es) do projeto"},{"id":"6cb1b012-7bd1-4fae-b9e4-4e72dc98bc88","value":"Chefe de Departamento do orientador responsável"},{"id":"7ecafb10-3b63-4297-907d-5ed0ab37c0cc","value":"CADD"},{"id":"c64595ac-68cf-4834-a6f4-be9322de2c35","value":"DIARQ"},{"id":"6bf87465-7663-4f69-8f51-3fbc54766a37","value":""},{"id":"57148e96-cd58-47a9-b04a-62849e68a930","value":"Abrir processo de submissão de projeto de iniciação à docência (PID)"},{"id":"454db5e9-324e-447b-82d3-7e9c45cb9e3b","value":"Incluir documento  299 - Formulário de submissão de projeto PID"},{"id":"8d14e734-f6d3-4c2d-8c4e-d1b07854794f","value":"Analisar documentos"},{"id":"3bb3a167-b0b9-4d1c-a9ef-f6a80d981a8a","value":"Incluir documento 872 - Despacho simples"},{"id":"b9e70cef-a79a-46ca-85bf-12f4331ac9db","value":"Assinar formulário"},{"id":"633b1bdd-1752-448b-b4af-db58e7d38e72","value":"Assinar formulário"},{"id":"9915982f-3def-4b04-a649-5a7384a427e3","value":""},{"id":"c36b6f9d-36c7-4eab-bcf7-4b527e1bdcd5","value":"Orientador responsável é o responsável pela disciplina na qual o projeto será desenvolvido?"},{"id":"9dfacc1c-a939-43ac-b4d0-9c0d7493664d","value":"Assinar formulário"},{"id":"31cba67a-265d-4778-83e7-3f9f6c84f676","value":"Assinar formulário"},{"id":"c95ca5d5-6ccf-4887-acd9-06f909fc8ed5","value":""},{"id":"ce932287-634c-42fe-b3d3-d014e3e6908a","value":"Realizar tratamento arquivístico"},{"id":"9f9afb42-a394-4c5b-a375-3ae8d66cd214","value":"Relacionar processo ao processo de seleção de projetos PID"},{"id":"d28c95ee-0cda-4afb-a9fd-386d2ef1785c","value":"Projeto homologado?"},{"id":"4ff0a348-df9f-4f6b-9075-d2c72b5341cc","value":""},{"id":"6c44732d-676d-4515-89ba-94151e283a21","value":"Salvar em PDF formulário de inscrição de projeto"},{"id":"42d20af6-8050-4351-a496-10640d514bcf","value":"Enviar este processo para a unidade do orientador responsável"},{"id":"aedb7d85-270c-4d9c-b7b7-82aa62b53d58","value":""},{"id":"c556629b-a77f-40d2-a8c2-82aae02319b9","value":"Incluir documento 872 - Despacho simples"},{"id":"ab523749-c0f6-4773-959b-789936327484"},{"id":"9959e66c-ee4c-43e7-9600-9fc34dd55181"},{"id":"02f3ef9a-27bc-448a-9963-59433d191de6"},{"id":"1a57507b-84d9-48c9-a74f-623b446fac60"},{"id":"2ec5ca83-e242-486a-9798-72fd5368bff6"},{"id":"ad12a26a-077d-4705-8e69-68ea4bbda107"},{"id":"2ebeb27b-c503-4bd1-8db9-b404c219cfe9"},{"id":"8fd5690d-6a8f-423e-832b-3f7c79da9df1"},{"id":"28a074a1-79c0-450b-926d-3a66a931848a"},{"id":"fcb1c459-e121-4d00-8839-82fe6c6545d4"}]},{"containerId":"83e93c5d-641c-4859-b9f8-89ce4f1caa5c","containerName":"[CADD] 03 Realizar seleção de projetos PID","isSubprocess":false,"elements":[{"id":"959619d9-ea80-413e-832c-8a5e187a0fa7","value":"[CADD] 03 Realizar seleção de projetos PID"},{"id":"52c55dbc-fc0d-41d5-a6de-f5de2752b3c8","value":"PROGRAD"},{"id":"3265a305-a526-4e02-a467-fb4b0fda3638","value":"CADD"},{"id":"b9273b7a-27c3-4f6b-b440-db4fb41cd5f7","value":"Avaliadores"},{"id":"f6242834-a16c-44f1-8fc7-b28fd2965e33","value":"Orientador responsável pelo projeto"},{"id":"318921a2-3a7a-4427-b9ee-75628346d3e4","value":"DIARQ"},{"id":"460b8609-0a41-4e33-bab3-9841e1423dc3","value":""},{"id":"1b43882d-fb2f-4514-bdd2-5990ec7a4e6f","value":"Incluir documento 917 - Edital"},{"id":"1b0a0c43-ec1a-42f9-8ccb-075126ef0f3a","value":"Publicar edital"},{"id":"716bd9c0-03e4-46b9-8a19-4c20cbd1059c","value":"Necessidade de retificação? "},{"id":"ed884ef9-aa71-4995-b287-155e0d39e8b2","value":"Incluir documento 198 - Retificação edital"},{"id":"a20cfab9-8c65-42a6-9de2-8cdc04271ed8","value":"Publicar retificação"},{"id":"8f9b7e6a-8e38-49ff-9a84-830ba5a8cb0f","value":"Enviar resultado para publicação de notícia"},{"id":"62071edb-bfe5-4a04-b154-c1cac0c5f085","value":"Abrir processo de seleção de projetos PID"},{"id":"f8c6ce4c-4d11-4237-9719-1cf78f6793d0","value":""},{"id":"b307d805-2f81-41c7-95fd-345b85c0f7de","value":""},{"id":"78a84cf2-a03c-4e55-aa9e-46255286c3cd","value":"Aguardar fim de prazo para cadastramento de propostas"},{"id":"387b959b-e20f-463d-bcc7-76552b64b439","value":""},{"id":"0c587021-62c8-4cff-94eb-7f2e08df05e6","value":"Publicar resultado"},{"id":"edbaeeef-fb5e-4b7a-a655-61d7c23b7291","value":"Incluir documento 201 - Resultado seleção"},{"id":"368dbf76-fc30-4410-8734-374b6724621b","value":"Realizar tratamento arquivístico"},{"id":"566caafc-40d4-4f99-8abf-74adfc45347e","value":""},{"id":"db160289-5592-45f0-9c36-261ee2261ea5","value":"Aguardar o fim do prazo de inscrições nas bolsas"},{"id":"2192cac5-6211-46df-ac4d-b421e0266568","value":"Publicar resultado "},{"id":"7bdb6728-1c9b-48da-8003-941d8c8d6367","value":"Solicitar publicação de notícia sobre lançamento de edital"},{"id":"d4a0905d-8977-406b-bc36-552ab509882c","value":"[CADD] 03-01 Submeter projetos de PID"},{"id":"ccf78fb6-cb7a-4daa-8975-0baa3b0513fb","value":"Incluir documento 201 - Resultado seleção"},{"id":"2b0e4461-f4dd-4f20-96e7-f442192d80f9","value":"Enviar PDF dos formulários dos projetos homologados para os avaliadores"},{"id":"8098603e-f788-4bfc-81ee-64d9f8196f60","value":"Avaliar projetos recebidos"},{"id":"99f73766-b6a9-4d87-85ef-cec38481076e","value":"Enviar avaliação dos projetos para a CADD"},{"id":"d3fdc067-235b-417f-a908-674e33a4853a","value":""},{"id":"61fbfbc7-0d85-48d1-bf5b-d116328c03d7","value":"Aguardar prazo de entrega dos relatórios parciais"},{"id":"2b490e08-7578-4d9e-8fd7-fa09d10159f5","value":"[CADD] 01 Entregar relatório parcial do PID"},{"id":"58e7387d-e3ae-4e47-8b2b-a5a5ae4ab8dd","value":""},{"id":"ba05762e-b25b-486a-9617-dbe10e33c320","value":""},{"id":"560c7145-6c03-4359-a841-111f9868041b","value":"Aguardar prazo de entrega dos relatórios finais"},{"id":"b4adecde-2cbf-4e70-85f7-181f8cb99a56","value":"[CADD] 04 Entregar relatório final do PID"},{"id":"976ac3f1-43ef-479e-82d9-f9b0ac0dadae","value":"Incluir documento 146 - Certificado"},{"id":"f6b17ae1-1544-475b-bbb6-124e5cac4716","value":""},{"id":"3631e7b6-de49-4687-ba98-9b9b1cf31688","value":"[CADD] 03-02 Selecionar bolsistas PID"},{"id":"4fb16b55-aa58-4185-95a4-bf410a555169","value":""},{"id":"2cdc0a70-2421-45bd-ab7d-3738a4e10703","value":""},{"id":"5fa7861a-3377-4e3b-9f5b-3ffe27847c4b"},{"id":"76ad9d39-ee96-400a-a65f-916126c78a6b"},{"id":"571432db-e620-4753-8ac5-c8e7ab2db96e"},{"id":"01a9c1a0-4aff-4e28-b644-d99e78f02679"},{"id":"8ea43a87-6f4c-4294-9951-6cf6625e29dc"},{"id":"1dea5d23-8ccb-4df9-bebc-c983d546752f"},{"id":"f34803d8-e616-407c-a79b-444f36651142"},{"id":"f590128c-a06c-478e-b472-9f82955737ef"},{"id":"21d3bc3f-f519-44ec-ac4f-3d554d6454cc"},{"id":"9373a3cd-5826-46b3-ae40-be2ca51f8c14"},{"id":"89d89f26-13c3-44a5-bd13-8a020538cc06"},{"id":"f1a045a9-f89e-409c-9c33-8f8bb0a3ba3e"},{"id":"115b6cb0-9c73-43cc-acbc-25ec416a99ae"},{"id":"e9c194f1-cc09-46ef-be20-0c5b854f1827"},{"id":"1baa3faf-1640-47ac-8d31-1a6b4e5ab295"},{"id":"f696d11a-ad8c-4c78-85e3-5f15b0473a06"},{"id":"353a7a60-cc7b-496d-a03d-e75ed40ce946"},{"id":"7108a9d9-2894-4c4e-9563-3595173e7ead"},{"id":"bd45f858-bde1-4690-9b92-44494dcb27c1"},{"id":"ff2e683d-9909-4fb4-9fbb-805e98c3230b"},{"id":"e29dd5f6-89fc-4e30-91cb-6c871dc52371"},{"id":"5a7b2d20-a3f6-4634-a013-8e821a84df60"},{"id":"530a2f2a-2773-49b4-84b2-b1197c430699"},{"id":"f39962be-a73c-4814-bd0e-6856b1b23687"},{"id":"83b9440e-c7a2-4314-9cc1-86854ff635e1"},{"id":"2c4632a2-b310-4fcd-afc2-a76fbe53150f"},{"id":"17b8130d-faf9-43d0-b070-84ecc23227c2"},{"id":"3faaf893-726b-4e3d-bae0-01a217089748"}]},{"containerId":"c1fc68b2-1c13-4d9e-8c94-334df87a6169","containerName":"[CADD] 03-02 Selecionar bolsistas PID","isSubprocess":false,"elements":[{"id":"02708678-0926-4488-bcb3-38ed9aa04194","value":"[CADD] 03-02 Selecionar bolsistas PID"},{"id":"b85ef5ed-0f77-4ed8-811f-1990b75ddae7","value":"Orientador responsável pelo projeto"},{"id":"e9068a4b-7b38-4909-b3d2-9c1730b98e2f","value":"Aluno"},{"id":"f1b65697-bec1-440b-9103-e876e7a5ea75","value":"CADD"},{"id":"109af122-0a11-4bc9-b04a-3aca6f67e32d","value":"Aguardar prazo final de inscrições dos alunos"},{"id":"6984cffe-038a-4ede-b0fb-a5ee101bb21f","value":""},{"id":"ee099da5-88c0-41ea-84b4-d4f0ee523085","value":"Incluir documento 301 - Ata de seleção bolsistas PID"},{"id":"b38e237b-c4a8-4cfd-93bf-f5e1b265b8fc","value":"Selecionar bolsistas"},{"id":"9c886871-0f39-4206-8802-3c8e35551733","value":""},{"id":"e612b19d-8657-41ff-8fcd-76be480e6287","value":"Realizar inscrição no projeto"},{"id":"9f9e739e-8c1f-47d0-b061-d8e9368bb505","value":""},{"id":"bb2c5f87-ee36-435b-b142-2707dc39c4bf","value":"Incluir documento 302 - Termo de compromisso bolsista PID"},{"id":"3f0d89fb-ddc5-46e4-a3c1-01c433a0a1fe","value":"Dar continuidade ao processo de submissão de projeto PID"},{"id":"b238f76c-825d-440e-8730-64be9eaec9d6","value":"Incluir nome do aluno na lista de bolsistas selecionados"},{"id":"ebc92e2b-1c5c-4fb5-a54d-815f5bf6d734","value":"Enviar este processo para a Divisão de Arquivo"},{"id":"5ab425fc-1708-4d43-a738-fb1949a7087e","value":""},{"id":"94d35410-df69-45dc-98f4-38f26d9ae0f9","value":"Assinar termo de compromisso"},{"id":"1bab3fa9-1702-466d-8ae4-2ee9fbbccd67"},{"id":"7aeca9ff-d4c8-44a8-84c1-bc48fd47d0c4"},{"id":"2680e532-8262-4290-aa97-017f74167c26"},{"id":"77283b42-03c0-4221-999f-ddd487c96470"},{"id":"375ea998-86e3-4f11-b52c-905655eb6ed4"},{"id":"63d2d8ef-7c86-4b7c-809c-e29289c82096"},{"id":"3180e3e2-254c-4ec2-b97c-2fc8c8d25c07"},{"id":"145dce3d-27d6-435b-a6e6-995a975bd4e7"},{"id":"c0e1bd76-b2e9-4159-aee9-162a8b90ed89"},{"id":"75477391-3ec4-4ad0-bc5f-b6aec767269a"},{"id":"a02a2911-68d8-4748-8bb9-c89537475c84"},{"id":"a1a4ab1b-8901-48a4-85af-d61aa277c3b6"}]}]}