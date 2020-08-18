import os
from fpdf import FPDF
pdf = FPDF()
directory = 'pictures'
for filename in os.listdir(directory):
    pdf.add_page()
    pdf.image('pictures/'+filename,0,0)

pdf.output("final.pdf", "F")
for filename in os.listdir(directory):
    os.remove('pictures/'+filename)
    


    
