Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DIPAT] 06 Receber bens permanentes","publishDate":"10/12/2020 11:58:42","pages":[{"id":"4439063a-5713-4c7b-a09d-adf240e3f86a","name":"[DIPAT] 06 Receber bens permanentes","version":"1.0","author":"michelo","image":"files\\diagrams\\DIPAT]_06_Receber_bens_permanentes.png","isSubprocessPage":false,"elements":[{"id":"27215bbd-0a48-44a0-92fb-f8e202fb33c7","name":"[DIPAT] 06 Receber bens permanentes","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2022.5,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"adc78bed-abb4-4fe6-9e53-de2152ab56d3","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":110.0,"y":288.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"29bec360-f70a-43f1-acb6-74379382ddb6","name":"Abrir processo de  recebimento de bens permanentes e equipamentos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":188.0,"y":264.0}],"radius":0.0,"height":78.0,"width":128.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"caf79c9d-d380-4d04-ae99-775134454b53","name":"Aguardar prazo de entrega dos materiais","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":237.0,"y":179.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"5f78c851-8856-4f01-b7a0-2537e3e57164","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":400.0,"y":174.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"8b361218-0bbc-4543-bfa0-4a7365365236","name":"Incluir documento 133 - Notificação fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":366.0,"y":266.0}],"radius":0.0,"height":60.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1f4aadbb-c917-4d63-ac11-29d86617baa6","name":"Enviar notificação ao fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":375.0,"y":403.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8f6e60c3-9d80-415f-8418-5b7154580166","name":"Aguardar defesa do fornecedor","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":405.0,"y":506.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"530566b7-bf26-455b-931c-3591468220ac","name":"Incluir documento 872 - despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":370.0,"y":578.0}],"radius":0.0,"height":69.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4a72e6dd-8449-4437-a3e7-ad813ac6f04b","name":"Houve apresentação de defesa?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":574.0,"y":689.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"a7a65a35-5399-4fa2-a613-ba09a3fb1538","name":"Incluir em PDF documentos  enviados pelo fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":368.0,"y":677.0}],"radius":0.0,"height":64.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7538c463-fbec-4df1-b3c2-43eea399a8c7","name":"Analisar conformidade do processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":375.0,"y":1382.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3918191a-de57-4e6b-99ea-89084a94950b","name":"Defesa aceita?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":622.0,"y":1392.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"6cf69531-928e-4237-9986-53f409b3fbda","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":809.0,"y":276.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ec248c04-538a-45d5-9ccb-c5928e84a029","name":"Não","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":809.0,"y":174.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Ainda há itens do empenho para serem recebidos?","elementType":"SequenceFlow","properties":[]}]},{"id":"c59cdec0-16d2-4555-9352-1dca94fefc2b","name":"Será autuado o processo de sanção?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":622.0,"y":1471.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"c3b06d72-b09a-4e17-b8f7-019c04b97f53","name":"Incluir documento 135 - Decisão administrativa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":882.0,"y":1457.5}],"radius":0.0,"height":68.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dcc1ad9e-4a34-488e-a933-e07983c795e6","name":"[DSG] 02 Aplicar sanção por descumprimento de entrega de materiais e bens","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":597.0,"y":1565.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DSG/%5bDSG%5d%2002%20Conformidade%20de%20registro%20de%20gest%c3%a3o/#list","type":"url"}},{"id":"8112791f-4a12-4217-a68b-381a6e17492d","name":"Anexar processo de sanção","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":761.0,"y":1565.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ee647ef4-c961-4a47-ae51-1065f2064896","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":984.0,"y":1566.0}],"radius":0.0,"height":61.0,"width":108.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7e4802eb-b4c6-4e01-8a27-7adb60ed84d2","name":"Haverá pagamento?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1018.0,"y":740.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"e1be23d3-a934-43b3-9944-f4800b7081c7","name":"Incluir em PDF documento com dados do recebimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":975.5,"y":162.0}],"radius":0.0,"height":64.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"387015aa-063e-43ee-a164-7072c759ed9d","name":"Inclui documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1204.0,"y":164.0}],"radius":0.0,"height":60.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2d890718-130c-4303-8547-5a72e55cbe39","name":"Incluir documento 989 - Apropriação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1208.0,"y":926.5}],"radius":0.0,"height":63.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2f94cf47-13eb-429a-ab3c-b823040f666a","name":"Será necessário atualizar regularidade do fornecedor?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1429.0,"y":938.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"124fe7c5-0291-4bdb-9dc6-531954859c44","name":"Fornecedor possui regularidade?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1429.0,"y":1035.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"5d73811f-7609-419f-ba68-7a242a2da82d","name":"Incluir documento 133 - Notificação fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1401.0,"y":1140.0}],"radius":0.0,"height":67.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"99be48cd-dc89-490a-b0e6-07bd2f00f07f","name":"Aguardar regularização do fornecedor","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1608.5,"y":1157.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"179ac033-f32b-4673-8490-4ba4e230b560","name":"Incluir em PDF comprovantes de regularidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1575.5,"y":1018.5}],"radius":0.0,"height":74.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"be7866eb-80a2-451e-90c2-460037470124","name":"Incluir  documento 990 - Informe de documentos gerados no SIAFI","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1562.0,"y":926.5}],"radius":0.0,"height":63.0,"width":123.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"480df2ab-406d-4113-b535-01a28bfb97fd","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1111.0,"y":725.0}],"radius":0.0,"height":70.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fc6654d0-5c8f-4660-83fd-4c67f7855041","name":"Incluir documento 986 - Nota de empenho ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1110.0,"y":1740.5}],"radius":0.0,"height":71.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"14e3e7f0-22ab-4d46-b867-4fa9bd2a1ee7","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1445.0,"y":1756.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"8616ef68-9860-42ef-82ca-5f3ca9abbc80","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1450.0,"y":1926.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"92147b6f-c07a-4f83-b990-6d47e0a598b4","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1450.0,"y":1272.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"88fd0824-7573-4aeb-aa22-ec7fa7313ed4","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1705.0,"y":1791.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"f4e51370-ece1-45b4-bda6-eec9c93b105d","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1710.0,"y":324.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"64d7c224-fc91-4332-8413-ea762d782ed9","name":"[DIPAT] 06-01 Distribuir bens permanentes ","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":553.0,"y":164.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"[DIPAT] 06-01 Distribuir bens permanentes - [DIPAT] 06-01 Distribuir bens permanentes ","type":"url","pageRef":"fc857a50-3542-424b-8904-cbbddc500bb0","processPageRef":"b43d0050-2476-49f1-8a96-1693e5358776"}]},{"id":"58960d1c-89e6-458e-beca-e93ad876b830","name":"Material entregue no prazo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":578.0,"y":276.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"e9eebc89-c440-4030-a23f-268d3a77e161","name":"DIPAT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":847.5,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d44bbbc7-0da3-44ce-afca-708630118d4c","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":867.5}],"radius":0.0,"height":489.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"091d4d02-7e3e-4116-8471-71d23a466cd3","name":"DSG","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1356.5}],"radius":0.0,"height":337.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f3fb45dd-f519-43dd-b935-54a7e7b4c71e","name":"DEO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1693.5}],"radius":0.0,"height":199.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5dd9ddf9-3ccc-4bbf-a69b-f391c4065bee","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1892.5}],"radius":0.0,"height":150.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"fc857a50-3542-424b-8904-cbbddc500bb0","name":"[DIPAT] 06-01 Distribuir bens permanentes","version":"1.0","author":"karinars","image":"files\\diagrams\\DIPAT]_06_01_Distribuir_bens_permanentes.png","isSubprocessPage":false,"elements":[{"id":"b43d0050-2476-49f1-8a96-1693e5358776","name":"[DIPAT] 06-01 Distribuir bens permanentes ","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":784.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"5197d74b-5168-4d3a-8587-2d4ea2775b26","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":125.0,"y":101.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"b8a77a6b-87e4-4293-8c87-76ffa0f8f627","name":"Conferir material entregue","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":197.0,"y":85.0}],"radius":0.0,"height":62.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8834237b-5636-4a59-9359-e6284beeb5da","name":"O material confere com o empenho?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":333.0,"y":96.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"f4503d48-53c2-4671-a8f1-b6a04c95de02","name":"Comunicar fornecedor para que os ajustes sejam providenciados","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":293.0,"y":248.000061}],"radius":0.0,"height":66.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d195e36a-6f7d-466e-92ed-908828eedfce","name":"Aguardar substituição do material","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":230.0,"y":218.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"f9c593c3-075c-4413-8e9d-0c7998ff92e8","name":"Incluir documento 179 - Termo de recebimento provisório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":490.0,"y":82.0}],"radius":0.0,"height":68.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5d852911-beb9-459b-9b03-07793b18d26a","name":"Comunicar requisitante sobre chegada do material","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":496.0,"y":242.0}],"radius":0.0,"height":68.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"94a0fdae-b373-4700-a00d-6f45524c318b","name":"Conferir material","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":503.0,"y":403.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2638dacf-86b3-4b8d-adf7-0195abb56da9","name":"O material  está de acordo com o solicitado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":528.0,"y":504.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"9525b753-57e7-491a-bd0e-503a7df06209","name":"Incluir documento 178 - Termo de recebimento definitivo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":778.0,"y":80.0}],"radius":0.0,"height":72.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d31f4198-1196-4280-aed6-8d4b21d6b0b9","name":"Comunicar o requisitante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":942.0,"y":86.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e45eb565-3733-4399-9625-4de372175166","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":972.0,"y":502.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"7444f9ee-00b2-4305-ab0b-fc83a4073e75","name":"[DIPAT] 07 Registrar bens permanentes","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1075.0,"y":86.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/DIPAT/%5bDIPAT%5d%2007%20Registrar%20bens%20permanentes/#list","type":"url"}},{"id":"fdb5c9f3-848c-484a-8c02-e2ca0e2cb855","name":"Incluir em PDF comprovante de registro","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1212.0,"y":86.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"42ba0867-839a-4ad4-bba6-425566abe0cc","name":"Incluir documento 090 - Termo de reponsabilidade patrimonial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1339.0,"y":82.0}],"radius":0.0,"height":68.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6bae556d-7ff6-4c51-be58-151f35d2e39a","name":"Disponibilizar bloco de assinatura","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1490.0,"y":86.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4932b565-1c3a-4a3a-bbe7-963d19fcfcfd","name":"Comunicar o responsável patrimonial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1490.0,"y":242.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"32b982b0-1e3b-4ce2-b456-b9bc0f619342","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1520.0,"y":715.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"5b40ff06-2ad2-423c-a3f6-3d8d6ec5bfe4","name":"Agendar entrega de material ao requisitante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1626.0,"y":239.0}],"radius":0.0,"height":70.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7c49b224-218e-45a0-b66e-6f6d57ddb4d7","name":"Incluir em PDF Nota fiscal","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1626.0,"y":88.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ab063464-52fd-4d20-a887-2af45387242e","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1792.0,"y":103.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"243aa2ea-5b81-4f03-ab98-1a312212b8ec","name":"DIPAT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":361.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"71fa09c6-a6c6-4f1e-b8bf-d00c430b0f76","name":"Requisitante","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":381.0}],"radius":0.0,"height":223.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a4382a97-a36a-4dc1-ad51-a2d222e7d10e","name":"Responsável patrimonial","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":604.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"4439063a-5713-4c7b-a09d-adf240e3f86a","containerName":"[DIPAT] 06 Receber bens permanentes","isSubprocess":false,"elements":[{"id":"27215bbd-0a48-44a0-92fb-f8e202fb33c7","value":"[DIPAT] 06 Receber bens permanentes"},{"id":"e9eebc89-c440-4030-a23f-268d3a77e161","value":"DIPAT"},{"id":"d44bbbc7-0da3-44ce-afca-708630118d4c","value":"DCF"},{"id":"091d4d02-7e3e-4116-8471-71d23a466cd3","value":"DSG"},{"id":"f3fb45dd-f519-43dd-b935-54a7e7b4c71e","value":"DEO"},{"id":"5dd9ddf9-3ccc-4bbf-a69b-f391c4065bee","value":"PROAD"},{"id":"124fe7c5-0291-4bdb-9dc6-531954859c44","value":"Fornecedor possui regularidade?"},{"id":"2d890718-130c-4303-8547-5a72e55cbe39","value":"Incluir documento 989 - Apropriação"},{"id":"99be48cd-dc89-490a-b0e6-07bd2f00f07f","value":"Aguardar regularização do fornecedor"},{"id":"7538c463-fbec-4df1-b3c2-43eea399a8c7","value":"Analisar conformidade do processo"},{"id":"1f4aadbb-c917-4d63-ac11-29d86617baa6","value":"Enviar notificação ao fornecedor"},{"id":"8112791f-4a12-4217-a68b-381a6e17492d","value":"Anexar processo de sanção"},{"id":"ee647ef4-c961-4a47-ae51-1065f2064896","value":"Incluir documento 872 - Despacho simples"},{"id":"530566b7-bf26-455b-931c-3591468220ac","value":"Incluir documento 872 - despacho simples"},{"id":"387015aa-063e-43ee-a164-7072c759ed9d","value":"Inclui documento 872 - Despacho simples"},{"id":"7e4802eb-b4c6-4e01-8a27-7adb60ed84d2","value":"Haverá pagamento?"},{"id":"179ac033-f32b-4673-8490-4ba4e230b560","value":"Incluir em PDF comprovantes de regularidade"},{"id":"adc78bed-abb4-4fe6-9e53-de2152ab56d3","value":""},{"id":"64d7c224-fc91-4332-8413-ea762d782ed9","value":"[DIPAT] 06-01 Distribuir bens permanentes "},{"id":"dcc1ad9e-4a34-488e-a933-e07983c795e6","value":"[DSG] 02 Aplicar sanção por descumprimento de entrega de materiais e bens"},{"id":"3918191a-de57-4e6b-99ea-89084a94950b","value":"Defesa aceita?"},{"id":"29bec360-f70a-43f1-acb6-74379382ddb6","value":"Abrir processo de  recebimento de bens permanentes e equipamentos"},{"id":"58960d1c-89e6-458e-beca-e93ad876b830","value":"Material entregue no prazo?"},{"id":"5d73811f-7609-419f-ba68-7a242a2da82d","value":"Incluir documento 133 - Notificação fornecedores"},{"id":"8616ef68-9860-42ef-82ca-5f3ca9abbc80","value":"Assinar documento em bloco"},{"id":"ec248c04-538a-45d5-9ccb-c5928e84a029","value":"Não"},{"id":"caf79c9d-d380-4d04-ae99-775134454b53","value":"Aguardar prazo de entrega dos materiais"},{"id":"be7866eb-80a2-451e-90c2-460037470124","value":"Incluir  documento 990 - Informe de documentos gerados no SIAFI"},{"id":"2f94cf47-13eb-429a-ab3c-b823040f666a","value":"Será necessário atualizar regularidade do fornecedor?"},{"id":"e1be23d3-a934-43b3-9944-f4800b7081c7","value":"Incluir em PDF documento com dados do recebimento"},{"id":"88fd0824-7573-4aeb-aa22-ec7fa7313ed4","value":""},{"id":"8b361218-0bbc-4543-bfa0-4a7365365236","value":"Incluir documento 133 - Notificação fornecedores"},{"id":"a7a65a35-5399-4fa2-a613-ba09a3fb1538","value":"Incluir em PDF documentos  enviados pelo fornecedor"},{"id":"f4e51370-ece1-45b4-bda6-eec9c93b105d","value":""},{"id":"fc6654d0-5c8f-4660-83fd-4c67f7855041","value":"Incluir documento 986 - Nota de empenho "},{"id":"480df2ab-406d-4113-b535-01a28bfb97fd","value":"Incluir documento 872 - Despacho simples"},{"id":"5f78c851-8856-4f01-b7a0-2537e3e57164","value":""},{"id":"c59cdec0-16d2-4555-9352-1dca94fefc2b","value":"Será autuado o processo de sanção?"},{"id":"8f6e60c3-9d80-415f-8418-5b7154580166","value":"Aguardar defesa do fornecedor"},{"id":"14e3e7f0-22ab-4d46-b867-4fa9bd2a1ee7","value":""},{"id":"92147b6f-c07a-4f83-b990-6d47e0a598b4","value":"Assinar documento em bloco"},{"id":"c3b06d72-b09a-4e17-b8f7-019c04b97f53","value":"Incluir documento 135 - Decisão administrativa"},{"id":"4a72e6dd-8449-4437-a3e7-ad813ac6f04b","value":"Houve apresentação de defesa?"},{"id":"6cf69531-928e-4237-9986-53f409b3fbda","value":""},{"id":"4aa9766c-aa1c-435b-8a03-5dcfe3ae6d38"},{"id":"746cd617-21ce-4712-8025-7ed9cce5da55"},{"id":"7f6ad9b7-333e-455d-b0a2-620ac63aa512"},{"id":"838af5cd-1665-48d4-bc5f-f190bc4812cc"},{"id":"78e1b317-5fbb-449d-a017-7c9a33cd9305"},{"id":"a4ba9d74-1800-48e9-8441-be7858538829"},{"id":"6a163b37-2ffb-4e38-8aa8-44a135c13777"},{"id":"5d595d31-6c2e-4a21-bcb0-5ab8a9b35572"},{"id":"54a8a324-9e74-4da1-8594-e39e63519fb9"},{"id":"29baefee-672d-4cc0-8af0-5011e1807553"},{"id":"0785464c-0f84-4152-9c2d-cec6918ba1d6"},{"id":"d11de2f2-4f92-46ff-88e6-b66ac0a1342e"},{"id":"fdc4575d-64c9-49b9-8bce-ccf30c56d4e3"},{"id":"2de71963-ce15-44c9-93d7-59590afd1be7"},{"id":"89eae116-df00-45f7-bd42-4a77809cd1a4"},{"id":"3fd4c1c0-0ea5-40f4-a915-e7f162885377"},{"id":"2fc79cd8-f539-45e6-8011-e4f0f495fbc9"},{"id":"51f52be7-b99c-4cec-a69e-7a5185116d5c"},{"id":"5eb6c102-8a4f-4c68-90fc-524c16670d4b"},{"id":"fbc0d2ca-cafa-4013-a736-9c161f64c0c6"},{"id":"36a43b60-6869-4041-8d9d-f5fff4869179"},{"id":"1f1be086-82e1-41d5-8dd3-116d1095eb00"}]},{"containerId":"fc857a50-3542-424b-8904-cbbddc500bb0","containerName":"[DIPAT] 06-01 Distribuir bens permanentes","isSubprocess":false,"elements":[{"id":"b43d0050-2476-49f1-8a96-1693e5358776","value":"[DIPAT] 06-01 Distribuir bens permanentes "},{"id":"243aa2ea-5b81-4f03-ab98-1a312212b8ec","value":"DIPAT"},{"id":"71fa09c6-a6c6-4f1e-b8bf-d00c430b0f76","value":"Requisitante"},{"id":"a4382a97-a36a-4dc1-ad51-a2d222e7d10e","value":"Responsável patrimonial"},{"id":"5197d74b-5168-4d3a-8587-2d4ea2775b26","value":""},{"id":"b8a77a6b-87e4-4293-8c87-76ffa0f8f627","value":"Conferir material entregue"},{"id":"5d852911-beb9-459b-9b03-07793b18d26a","value":"Comunicar requisitante sobre chegada do material"},{"id":"8834237b-5636-4a59-9359-e6284beeb5da","value":"O material confere com o empenho?"},{"id":"f4503d48-53c2-4671-a8f1-b6a04c95de02","value":"Comunicar fornecedor para que os ajustes sejam providenciados"},{"id":"2638dacf-86b3-4b8d-adf7-0195abb56da9","value":"O material  está de acordo com o solicitado?"},{"id":"42ba0867-839a-4ad4-bba6-425566abe0cc","value":"Incluir documento 090 - Termo de reponsabilidade patrimonial"},{"id":"6bae556d-7ff6-4c51-be58-151f35d2e39a","value":"Disponibilizar bloco de assinatura"},{"id":"32b982b0-1e3b-4ce2-b456-b9bc0f619342","value":"Assinar documento em bloco"},{"id":"5b40ff06-2ad2-423c-a3f6-3d8d6ec5bfe4","value":"Agendar entrega de material ao requisitante"},{"id":"ab063464-52fd-4d20-a887-2af45387242e","value":""},{"id":"94a0fdae-b373-4700-a00d-6f45524c318b","value":"Conferir material"},{"id":"7c49b224-218e-45a0-b66e-6f6d57ddb4d7","value":"Incluir em PDF Nota fiscal"},{"id":"d195e36a-6f7d-466e-92ed-908828eedfce","value":"Aguardar substituição do material"},{"id":"f9c593c3-075c-4413-8e9d-0c7998ff92e8","value":"Incluir documento 179 - Termo de recebimento provisório"},{"id":"9525b753-57e7-491a-bd0e-503a7df06209","value":"Incluir documento 178 - Termo de recebimento definitivo"},{"id":"7444f9ee-00b2-4305-ab0b-fc83a4073e75","value":"[DIPAT] 07 Registrar bens permanentes"},{"id":"4932b565-1c3a-4a3a-bbe7-963d19fcfcfd","value":"Comunicar o responsável patrimonial"},{"id":"fdb5c9f3-848c-484a-8c02-e2ca0e2cb855","value":"Incluir em PDF comprovante de registro"},{"id":"d31f4198-1196-4280-aed6-8d4b21d6b0b9","value":"Comunicar o requisitante"},{"id":"e45eb565-3733-4399-9625-4de372175166","value":"Assinar documento em bloco"},{"id":"58abc64d-c687-4fc3-a30f-981d7872eff0"},{"id":"81f9ebe0-d96d-463d-8b68-0e8b2cbf9238"},{"id":"f2957ea6-0228-45ac-b84c-cec31a214c41"},{"id":"27549193-bcc4-46ea-88a5-73318cae481f"},{"id":"e3606332-020d-4c98-b262-be6a5455975d"},{"id":"eb0660f1-7765-4fb4-878e-877d5338edd8"},{"id":"8ae464d3-5e1c-43db-80e6-2e787589a45a"},{"id":"6ccf3c05-357b-4454-a3d7-5934caf1ed6c"},{"id":"06e4cbfe-df11-4c06-9561-2f3d3bae0718"},{"id":"2d2fc191-0761-42e0-870c-7b32d78bd76f"},{"id":"6a75034e-c213-44ad-9537-f572c30bd540"},{"id":"de6df962-c889-4a35-a5c6-ae19fd671dc9"},{"id":"ac9a2013-3c11-43eb-a180-b81825f4bf11"},{"id":"b31a4e7a-e867-41fa-aae1-d4090a10cc05"},{"id":"0fa3d030-b8d7-46b8-84ee-41c2dcf66d9c"},{"id":"164ab7ee-41e0-443d-9c8f-be98e86937f6"},{"id":"d5434143-a5d3-45eb-a191-501443df1bf0"},{"id":"0c59f614-1d86-4dec-a3b3-9e83685cd0a7"},{"id":"522bd66d-b586-4b3d-b9ec-0ba534418814"},{"id":"46f666fa-a44a-4c31-98ac-2e75911e5a96"}]}]}